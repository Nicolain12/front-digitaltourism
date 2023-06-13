
async function fetchApi(endpoint, config, cb) {
    try {
        const response = await fetch(endpoint, config);
        const jsonResponse = await response.json();
        if (jsonResponse.info.status === 200) {
            cb(jsonResponse, null)
        }
        if (jsonResponse.info.status === 400) {
            cb(null, jsonResponse)
        }
    } catch (err) {
        console.error(err)
    }
}