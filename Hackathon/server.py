# FLASK_APP=server.py flask run
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect
app = Flask(__name__)

sales = []

current_id = 1

email = ""

username = ""

table_number = 1

clients = [
    "Hamburger",
    "Hot Dog",
    "Soup",
    "Fries",
    "Churro",
    "Sandwhich",
    "Cauliflower",
    "Coke",
    "Water",
    "Sprite",
]

connected = 0



@app.route('/user_logon')
def user_logon():
	return render_template('user_logon.html')

@app.route('/waiter_logon')
def waiter_logon():
	return render_template('waiter_logon.html')

@app.route('/payment')
def payment():
	return render_template('payment.html')

@app.route('/user_default')
def user_defualt():
	if connected is 0:
		return render_template('user_default.html', email=email)
	else:
		return redirect('/user_sales')

@app.route('/waiter_default')
def waiter_default():
	print(username)
	return render_template('waiter_default.html', username=username)


@app.route('/pair_user')
def pair_user():
	return render_template('pair_user.html', table_number=table_number)

@app.route('/waiter_sales')
def waiter_sales():
	return render_template('waiter_sales.html', sales=sales, clients=clients)

@app.route('/user_sales')
def user_sales():
	return render_template('user_sales.html', sales=sales, clients=clients)



@app.route('/save_sale', methods=['GET', 'POST'])
def save_sale():

    global sales
    global current_id
    global clients


    new_sale = request.get_json()
    salesperson = new_sale["salesperson"]
    client = new_sale["client"]
    reams = new_sale["reams"]
    new_sale_entry = {
        "id": current_id,
        "salesperson": salesperson,
        "client": client,
        "reams": reams
    }
    current_id+=1

    sales.insert(0, new_sale_entry)

    if(client not in clients):
        clients.append(client)

    return jsonify(sales = sales, clients = clients)


@app.route('/delete_sale', methods=['GET', 'POST'])
def delete_sale():

    global sales

    id_num = request.get_json()
    for sale in sales: 
        if sale["id"] == id_num:
            sales.remove(sale)           
    return jsonify(sales=sales)

@app.route('/save_user_logon', methods=['GET', 'POST'])
def save_user_logon():
	global email

	email = request.get_json()
	print(email)

	return jsonify(email=email)


@app.route('/save_waiter_logon', methods=['GET', 'POST'])
def save_waiter_logon():
	global username

	username = request.get_json()

	return jsonify(username=username)


@app.route('/go_to_table', methods=['GET', 'POST'])
def go_to_table():
	global table_number

	table_number = request.get_json()

	return jsonify(table_number=table_number)


@app.route('/go_to_pair_user', methods=['GET', 'POST'])
def go_to_pair_user():
	
	return jsonify(table_number=table_number)


@app.route('/go_to_sales', methods=['GET', 'POST'])
def go_to_sales():
	global connected
	connected = 1
	
	return jsonify(email=email)


@app.route('/go_to_pay', methods=['GET', 'POST'])
def go_to_pay():
	
	
	return jsonify(email=email)





    
