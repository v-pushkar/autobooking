const _storage_name = 'parse_link';

export const addDataToStorage = (name,dataObj)=>{
    localStorage.setItem(_storage_name, JSON.stringify(dataObj));
} 

export const getDataObjFromStorage = (name) =>{
    const storageData = localStorage.getItem(name);
    return JSON.parse(storageData);
}

export const storageCheck = (name) =>{
    const obj = getDataObjFromStorage(name)
    let isSrchDataInStor = false;
    if(obj) {
        for (let [key, value] of Object.entries(obj)) {
            if(value){
                isSrchDataInStor = true
            }
          }
    
    }
   return isSrchDataInStor
}
export const createParse_link_data = (state) => {
    const s = state.service ? "/s-" + state.service : "";
    const b = state.brand ? "/d-" + state.brand : "";
    const st = state.style ? "/st-" + state.style : "";
    const link = s + b + st;   
    return link;
  };