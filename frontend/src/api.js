

//all places API CALL
export const fetchDataAll = async () => {
    try {
        const resp = await fetch(`/places`,{
            headers:{
                "accepts":"application/json"
            }
        })
        console.log(resp)
        const data = await resp.json();
        console.log(data)
        return data;
    }
    catch(e) {
        console.log("AHHHHHHHHH")
        console.log(e)
    }
}

//Searched places by name, type and area API CALL
export const fetchDataNameTypeArea = async (param) => {
    try {
        const resp = await fetch(`/places-by-name-and-type-and-area?name=${param.name}&type=${param.type}&area=${param.area}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//Searched places by type and area API CALL
export const fetchDataTypeArea = async (param) => {
    try {
        const resp = await fetch(`/places-by-type-and-area?type=${param.type}&area=${param.area}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//Searched places by name and area API CALL
export const fetchDataNameArea = async (param) => {
    try {
        const resp = await fetch(`/places-by-name-and-area?name=${param.name}&area=${param.area}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//Searched places by name and type API CALL
export const fetchDataNameType = async (param) => {
    try {
        const resp = await fetch(`/places-by-name-and-type?name=${param.name}&type=${param.type}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//search places by name API CALL
export const fetchDataName = async (param) => {
    try {
        const resp = await fetch(`/places-by-name?name=${param.name}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}
//search places by type API CALL
export const fetchDataType = async (param) => {
    try {
        const resp = await fetch(`/places-by-type?type=${param.type}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}
//search places by area API CALL
export const fetchDataArea = async (param) => {
    try {
        const resp = await fetch(`/places-by-area?area=${param.area}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//post area tour
export const postAreaTour = async (data) => {
    try{

        fetch("/add-area-tour",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })

    }catch(e){
        console.log(e)
    }
}

//post feedback
export const postFeedback = async (data) => {
    try{

        fetch("/add-feedback",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })

    }catch(e){
        console.log(e)
    }
}