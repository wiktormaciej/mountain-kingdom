// Correct credentials:
// {
//     "login": "correct_login@example.com",
//     "password": "C0rr3Ct_P@55w0rd"
//   }

const signIn = async ({ email, password }) => {
    const signInApiUrl = 'https://recruitment-api.pyt1.stg.jmr.pl/login'
    const signInOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: email, password })
    }
    try {
        const response = await fetch(signInApiUrl, signInOptions)
        const jsonResponse = await response.json()
        return jsonResponse
    }
    catch (e) {
        throw new Error('Connection problem')
    }
}

export default signIn