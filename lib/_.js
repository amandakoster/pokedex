import superagent from 'superagent';

class DataCache {

    fetchData(url) {
        return this.getCache(url)
        .then(data => data)
        .catch( err => {
            return superagent.get(url)
            .then(result => {
                this.setCache(url, result.body);
                return result.body;
            })
            .catch(console.error);
        })
        .then(data => data)
    }


    getCache(key){
        return new Promise ( (resolve, reject) => {
            let safeValue = typeof value === "string" ? value : JSON.stringify(value);
            if(localSotrage.setItem(key, safeValue) ) { resolve(); }
            else { reject("Unable to caceh", key); }
        });
    }
}

export default new DataCache