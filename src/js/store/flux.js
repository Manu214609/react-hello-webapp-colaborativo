const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			createConte: (fullName,emailAdress,address,phoneNumber) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: 'POST',
					headers: {
						'Contect-Type':'application/json'
					},
					body: JSON.stringify({
						"full_name": fullName,
						"email":emailAdress,
						"agenda_slug":"miguelmr",
						"address":address,
						"phone":phoneNumber
				})
			})

			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log('Error:', error));
			},
		getContacts: () => {
			fetch('https://playground.4geeks.com/apis/fake/contact/agenda/miguelmr')
			.then(response => response.json())
			.then(data => setStore({ contacts: data }))
			.catch(error => console.log('Error:', error));
			},
			deleteContact: () => {
			}, 
			
	    }
    };
};

export default getState;
