import { createMachine } from "xstate";

const fetchMachine = createMachine({
  id: "login landing page",
  on: {
    "/": "landing",
    "/verify": "pw_verification",
    "/newpw": "new_pw_form",
    "/signup": "signup_form"
  },
  states: {
    landing: {
      tags: "loggedOut",
      meta: {
        description: "Logged out landing page",
      },
      on: {
        forgot_pw_click: "forgot_pw_form",
        create_an_account_click: "signup_email",
        simplified_create_an_account_click: "signup_form_with_email",
        login_success: "login_success"
      },
    },
    login_success: {
      meta: {
        description: "Internal logged in dashboard"
      },      
      tags: 'loggedIn',
      on: {
        logout: "landing"
      }
    },
    forgot_pw_form: {
      meta: {
        description: "User requests support as he forgot his password.",
      },
      on: {
        submit: "email_verification_code", 
        submit_simplify: "email_password_reset",
      },
    },
    new_pw_form: {
      meta: {
        description:
          "Form with password & confirm new password fields. User identity is stored in backend linked by a random UUID in url.",
      },
      on: {
        submit: "landing",
      },
    },
    email_verification_code: {
      meta: {
        description: "User receives email with verification code",
      },
      on: {
        "": "verification_code_form",
      },
    },
    verification_code_form: {
      meta: {
        description:
          "Form to enter verification, send new code, verify code, reset to blank pw... ?",
      }
    },
    signup_email: {
      meta: {
        description: "User wishes to create a new account, enters email",
      },
      on: {
        submit: "email_signup_link"
      },
    },
    signup_form: {
      meta: {
        description: "User wishes to create a new account, enters all his data on form (no email or password).",
      },
      on: {
        submit: "verification_email",
        submit_failed: "registration_failure",
        i_have_an_account_click: "landing",
      },
    },
    signup_form_with_email: {
      meta: {
        description: "User wishes to create a new account, enters email and all his data on same form (no password).",
      },
      on: {
        submit: "email_password_reset",
        submit_failed: "registration_failure_s",
        i_have_an_account_click: "landing",
      },
    },
    verification_email: {
      meta: {
        description:
          "User receives email with /verify confirmation link (this can be simplified by reusing the new password form)",
      },
      on: {
        '': "registration_success"
      }
    },
    pw_verification: {
      meta: {
        description: "User sets his initial password by entering a verification code from email link",
      },
      on: {
        submit: "landing"
      }
    },
    registration_success: {
      meta: {
        description: "Thank you for registration",
      },
    },
    email_signup_link: {
      meta: {
        description: "Send /signup link to enable user to sign up."
      }
    },
    registration_failure: {
      meta: {
        description: "Something went wrong with your request for registration",
      },
      on: {
        retry: "signup_form",
      },
    },
    registration_failure_s: {
      meta: {
        description: "Something went wrong with your request for registration",
      },
      on: {
        retry: "signup_form_with_email",
      },
    },
    email_password_reset: {
      meta: {
        description:
          "Send unique /newpw url to reset the password linked to this email.",
      },
    },
  },
});