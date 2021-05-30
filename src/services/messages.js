import axios from "axios";

async function getMessagesAPIGETResponse(route) {
  try {
    const config = {
      baseURL: "http://localhost:8000",
      method: "GET",
    };
    try {
      const result = await axios.create(config).get(route);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
async function getMessagesAPIPOSTResponse(route, payload) {
  try {
    const config = {
      baseURL: "http://localhost:8000",
      method: "POST",
    };

    try {
      const result = await axios.create(config).get(route);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
async function getMessagesAPIDELETEResponse(route, payload) {
  try {
    const config = {
      baseURL: "http://localhost:8000",
      method: "DELETE",
    };

    try {
      const result = await axios.create(config).delete(route);
      console.log(result);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getMessagewithId(id) {
  return await getMessagesAPIGETResponse(`/messages/${id}`);
}
export async function getAllMessages() {
  return await getMessagesAPIGETResponse(`/messages`);
}
export async function deleteMsg(id) {
  return await getMessagesAPIDELETEResponse(`/messages/${id}`);
}
