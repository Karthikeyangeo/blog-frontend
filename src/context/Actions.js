export const LoginStart =(userCredentials)=>({
    type:"LOGIN_START"
})

export const LoginSuccess =(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});

export const LoginFailure =()=>({
    type:"LOGIN_FAILURE"
})

export const logout=()=>({
    type:"LOGOUT",
})

export const UUPDATEStart =(userCredentials)=>({
    type:"UPDATE_START"
})

export const UUPDATESuccess =(user)=>({
    type:"UPDATE_SUCCESS",
    payload:user,
});

export const UUPDATEFailure =()=>({
    type:"UPDATE_FAILURE"
})