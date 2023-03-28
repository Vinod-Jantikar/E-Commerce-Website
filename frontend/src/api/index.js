export const APIURL = `http://localhost:8080` 

export const makeApiCall = async (url, payload) => {

    const headers = {
        'Content-Type': "application/json"
    }

    payload.headers = headers
    const response = await fetch(`${APIURL}${url}`, payload)

    if(!response.ok){
        return Promise.reject("Something went wrong")
    }

    return response.json()

}


