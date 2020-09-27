import axios from 'axios';

const url = 'tasks/';

class Services {
    static getExpenses(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) =>{
                console.log("Res: " + res.data);
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

    static updateExpense(id, description, price, date, userId, category){
        return axios.put(`${url}${id}`,{
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