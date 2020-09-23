import axios from 'axios';

const url = 'http://localhost:8082/tasks/';

class Services {
    /*static getExpenses(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(expense => ({
                        ...expense,
                        date: new Date(expense.date)   
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }*/

    static getExpenses(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) =>{
                const data = res.data;
                resolve(
                    data.map(expense =>({
                        ...expense,
                        date: new Date(expense.date)
                    }))
                );
            })
            .catch((err) =>{
                reject(err);
            })
        });
    }

    static insertExpense(description, price, date, userId, category){
        return axios.post(url, {
            description,
            price,
            date,
            userId,
            category
        });
    }

    static deleteExpense(id){
        return axios.delete(`${url}${id}`);
    }
}

export default Services;