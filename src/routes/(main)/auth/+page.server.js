import { fail, redirect } from "@sveltejs/kit";
import { BASESERVERHOST_DEV } from "$env/static/private";
import {
  confirmPassword,
  validateEmail,
  validatePassword,
} from "$lib/utils/form_validation";

export const actions = {
  login: async ({ request, fetch }) => {
    console.log("Login action called");
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    if (email === "") {
      return fail(422, {
        error: "email cannot be blank",
        password: data.get("password"),
      });
    }

    if (password === "") {
      return fail(422, {
        error: "password cannot be blank",
        email: data.get("email"),
      });
    }

    // GOOD PATH
    const loginBody = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginBody),
    };
    const res = await fetch(`${BASESERVERHOST_DEV}/auth/login`, requestOptions);
    if (!res.ok) {
      const response = await res.json();
      console.log(response.error);
      return fail(400, {
        error: "problem logging in",
        email: data.get("email"),
      });
    }

    const response = await res.json();
    console.table(response);
    throw redirect(303, "/");
  },

  signup: async ({ request, fetch }) => {
    console.log("Signup Action called");
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const confirmpassword = data.get("confirmpassword");
    const bizname = data.get("bizname");
    const fname = data.get("firstname");
    const lname = data.get("lastname");

    const userInput = {
      email: data.get("email"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      bizname: data.get("bizname"),
      fname: data.get("firstname"),
      lname: data.get("lastname"),
    };

    /***** Have to do this because data.get returns a FormDataEntryValue | null *****/
    if (typeof userInput.email !== "string") {
      return fail(400, {
        error: "Email must be a string.",
        userInput,
      });
    }

    if (typeof password !== "string") {
      return fail(400, {
        error: "Password must be a string.",
        userInput,
      });
    }

    if (typeof confirmpassword !== "string") {
      return fail(400, {
        error: "confirmed password must be a string.",
        userInput,
      });
    }
    /*******************************************************/

    if (email === "") {
      return fail(422, {
        error: "email cannot be blank",
        userInput,
      });
    }

    if (!validateEmail(userInput.email)) {
      return fail(422, {
        error: "email is not valid",
        userInput,
      });
    }

    const validatedPass = validatePassword(password);
    if (password && !validatedPass.confirmed) {
      return fail(422, {
        error: validatedPass.message,
        userInput,
      });
    }

    const confirmedPass = confirmPassword(password, confirmpassword);
    if (confirmpassword && !confirmedPass.confirmed) {
      return fail(422, {
        error: confirmedPass.message,
        userInput,
      });
    }

    // GOOD PATH
    const signupBody = {
      email,
      password,
      bizname,
      fname,
      lname,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupBody),
    };
    const res = await fetch(
      `${BASESERVERHOST_DEV}/auth/signup`,
      requestOptions
    );
    if (!res.ok) {
      const response = await res.json();
      console.log(response.error);
      return fail(400, {
        error: "problem logging in",
        email: data.get("email"),
      });
    }

    const response = await res.json();
    console.table(response);
    throw redirect(303, "/");
  },
};
