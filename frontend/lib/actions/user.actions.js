import axios from 'axios';

const getUserByEmail = async (email) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user?email=${email}`);
  return response.data;
};

function generateOTP() {
    const min = 100000;
    const max = 999999;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sendEmailOTP = async (email) => {
  try {
    const otp = generateOTP();
    console.log("OTP :- ", otp);
    // Write code to send otp to email
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}) => {
  const existingUser = await getUserByEmail(email);

  sendEmailOTP(email);

  if (!existingUser) {
    const payload = {
      name: fullName,
      email
    }
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user`, payload);
    return response.data
  }

  return existingUser;
};

// export const verifySecret = async ({
//   accountId,
//   password,
// }: {
//   accountId: string;
//   password: string;
// }) => {
//   try {
//     const { account } = await createAdminClient();

//     const session = await account.createSession(accountId, password);

//     (await cookies()).set("appwrite-session", session.secret, {
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict",
//       secure: true,
//     });

//     return parseStringify({ sessionId: session.$id });
//   } catch (error) {
//     handleError(error, "Failed to verify OTP");
//   }
// };

// export const getCurrentUser = async () => {
//   try {
//     const { databases, account } = await createSessionClient();

//     const result = await account.get();

//     const user = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.usersCollectionId,
//       [Query.equal("accountId", result.$id)],
//     );

//     if (user.total <= 0) return null;

//     return parseStringify(user.documents[0]);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signOutUser = async () => {
//   const { account } = await createSessionClient();

//   try {
//     await account.deleteSession("current");
//     (await cookies()).delete("appwrite-session");
//   } catch (error) {
//     handleError(error, "Failed to sign out user");
//   } finally {
//     redirect("/sign-in");
//   }
// };

// export const signInUser = async ({ email }: { email: string }) => {
//   try {
//     const existingUser = await getUserByEmail(email);

//     // User exists, send OTP
//     if (existingUser) {
//       await sendEmailOTP({ email });
//       return parseStringify({ accountId: existingUser.accountId });
//     }

//     return parseStringify({ accountId: null, error: "User not found" });
//   } catch (error) {
//     handleError(error, "Failed to sign in user");
//   }
// };
