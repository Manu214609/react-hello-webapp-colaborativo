const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
			onDelete: false
			
		},
		actions: {
			// Use getActions to call a function within a function
			createAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/katherin', {
					method: 'POST',
					headers: {
						'Content-Type':'application/json'
					},
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error:', error));
			},
			createConte: (fullName, emailAdress, address, phoneNumber) => {
				fetch('https://playground.4geeks.com/contact/agendas/katherin/contacts', {
					method: 'POST',
					headers: {
						'Content-Type':'application/json'
					},
					body: JSON.stringify({
						"name": fullName,
						"email": emailAdress,
						"address": address,
						"phone": phoneNumber
					})
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error:', error));
			},
			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/katherin/contacts')
				.then(response => response.json())
				.then(data => {
					setStore({ contacts: data })
					console.log(data)
				})
				.catch(error => console.log('Error:', error));
			},
			getSingleContacts: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${id}`)
				.then(response => response.json())
				.then(data => setStore({ contacts: data.contacts }))
				.catch(error => console.log('Error:', error));
			},
			editContact: (fullName, emailAdress, address, phoneNumber, id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"full_name": fullName,
						"email": emailAdress,
						"agenda_slug": "miguelmr",
						"address": address,
						"phone": phoneNumber
					})
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error:', error));
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/katherin/contacts/${id}`, {
					method: 'DELETE',
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error:', error));
			}, 
		}
	};
};

export default getState;