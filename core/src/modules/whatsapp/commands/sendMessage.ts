import {checkNumbers, client, logMessage} from "../main";
import getCurrentUser from "../../../auth/getCurrentUser";

export const sendMessage = async (phoneNumber: string, message: string, senderIdToken: string) => {

  // Checking that phone number is not empty
  if (phoneNumber == "" || phoneNumber == null) {
    throw "You need to provide phone number"
  }

  // Checking that message is not empty
  if (message == "" || message == null) {
    throw "You need to provide message to send"
  }

  // Removing + at the start if it exits so the phone number is in right format
  if (phoneNumber.startsWith('+')) {
    phoneNumber = phoneNumber.substring(1)
  }

  //Making chat id from phone number to use at client.sendMessage to identify where to send the message
  const chatId = phoneNumber + "@c.us"

  try {

    await checkNumbers([phoneNumber])

    // Sending message to chosen chat
    const returnMessage = await client.sendMessage(chatId, message)

    const user = await getCurrentUser(senderIdToken)
    logMessage(`${user?.email || "Unknown"} sent message:\n\n${returnMessage.body}`)
    return `Message ${returnMessage.body} sent`

  } catch (error: any) {
    if (error.message != undefined) {
      throw error.message
    }
    throw error
  }
}