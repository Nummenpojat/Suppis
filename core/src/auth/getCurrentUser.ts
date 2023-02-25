import {getAuth} from "firebase-admin/auth";

const getCurrentUser = async (idToken: string) => {
  try {
    // Verifies ID token to ensure correct access right to API
    const result = await getAuth().verifyIdToken(idToken)

    // Gets user to check custom claims
    return await getAuth().getUser(result.uid)
  } catch (error) {
    console.log(`Error occurred when getting current user: ${error}`)
  }
}

export default getCurrentUser;