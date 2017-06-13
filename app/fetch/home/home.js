import {get} from "../get.js";

export function getAdData () {
      var result = get ("/api/homead");
       return result;
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getCityItem(){
    var result = get ("/api/cityitem");
    return result;
}