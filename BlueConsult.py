from flask import Flask, request
import mysql.connector
app = Flask(__name__)

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password='',
    database ="Blue Consult"
)



@app.route('/user/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']


    mycursor = mydb.cursor(buffered=True)
    mycursor.execute("SELECT * FROM `users` where email='"+email+"' and password='"+password+"'")

    userRow =mycursor.fetchone()
    if userRow is None:
        return {
            "error":True,
            "message":"Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data":{
                "id" : userRow[0],
                "first_name": userRow[1],
                "last_name": userRow[2],
                "email": userRow[3],
                "phone": userRow[4],
                "password": userRow[5],
                "address": userRow[6],
            },
            "error": False
        }



@app.route('/user/register', methods=['POST'])
def signup():

    first_name = request.json['first_name']
    last_name = request.json['last_name']
    phone = request.json['phone']
    email = request.json['email']
    password = request.json['password']
    address = request.json['address']


    mycursor = mydb.cursor()

    sql ="INSERT INTO `users` ( `first_name`, `last_name`, `email`, `phone`, `password`, `address`) VALUES ( %s, %s, %s, %s, %s, %s)"
    val = (first_name, last_name, email, phone, password, address)

    mycursor.execute(sql, val)

    mydb.commit()

    print(mycursor.rowcount, "record inserted.")


    return{
        "error": False,
        "data": "userRow",
        "message": "User signup successful"
    }


@app.route('/user/update', methods=['POST'])
def updateUsers():

    last_name = request.json['last_name']
    email = request.json['email']



    mycursor = mydb.cursor()

    sql ="UPDATE users SET last_name = '"+last_name+"' WHERE email = '"+email+"'"

    mycursor.execute(sql)

    mydb.commit()

    print(mycursor.rowcount, "record inserted.")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "message": "Update successful",
        }
    else:
        return {
                   "message": "Update successful",
               }




@app.route('/user/change-password', methods=['POST'])
def changePassword():

    id = request.json['id']
    new_password = request.json['new_password']


    mycursor = mydb.cursor()

    sql = "UPDATE users SET password = '" + new_password + "' WHERE id = ' "+ id +"'"

    mycursor.execute(sql)

    mydb.commit()

    print(mycursor.rowcount, "record inserted.")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }

@app.route('/category', methods=['GET'])
def getCategories():

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM categories,products WHERE  ")

    # SELECT
    # orders.order_id, suppliers.name
    # FROM
    # suppliers
    # INNER
    # JOIN
    # orders
    # ON
    # suppliers.supplier_id = orders.supplier_id
    # ORDER
    # BY
    # order_id;

    userRow = mycursor.fetchall()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }

@app.route('/category/<uservariable>', methods=['GET'])
def getCategory(uservariable):


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM categories  WHERE id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }

@app.route('/category/<uservariable>', methods=['PUT'])
def updateCategory(uservariable):

    name = request.json['name']


    mycursor = mydb.cursor()

    sql = "UPDATE categories SET name = '"+str(name)+"' WHERE id = '"+str(uservariable )+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/category', methods=['POST'])
def addCategory():

    name = request.json['name']

    mycursor = mydb.cursor()

    sql = "INSERT INTO categories (name) VALUES ('" + name + "')"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }






@app.route('/category/<uservariable>', methods=['DELETE'])
def deleteCategory(uservariable):


    mycursor = mydb.cursor()

    sql = "DELETE FROM categories  WHERE id = '" +str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "Deletion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/products', methods=['GET'])
def getProducts():

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM products")

    userRow = mycursor.fetchall()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/products/<uservariable>', methods=['GET'])
def getProduct(uservariable):


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM products  WHERE id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/products', methods=['POST'])
def addProduct():

    # id = request.json["id"]
    category_id = request.json['category_id']
    supplier_id = request.json['supplier_id']
    name = request.json['name']
    average_rating = request.json['average_rating']
    quantity = request.json['quantity']
    description = request.json['description']
    unit_price = request.json['unit_price']
    image_url = request.json['image_url']


    mycursor = mydb.cursor()

    sql = "INSERT INTO products ( category_id, supplier_id, name, average_rating, quantity, description,unit_price,image_url) VALUES ( '"+str(category_id)+"', '"+str(supplier_id)+"','"+name+"','"+str(average_rating)+"','"+str(quantity)+"', '"+description+"', '"+str(unit_price)+"','"+image_url+"')"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/products/<uservariable>', methods=['PUT'])
def updateProducts(uservariable):

    name = request.json['name']

    mycursor = mydb.cursor()

    sql = "UPDATE products SET name = 'Basket' WHERE id = ' "+str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }



@app.route('/products/<uservariable>', methods=['DELETE'])
def deleteProduct(uservariable):


    mycursor = mydb.cursor()

    sql = "DELETE FROM products  WHERE id = '" +str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "Deletion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }

@app.route('/cart/<uservariable>', methods=['GET'])
def getCart(uservariable):


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM cart  WHERE id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }

@app.route('/cart/<uservariable>/user', methods=['GET'])
def getCartbyId(uservariable):

    # user_id = request.json['user_id']


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM cart  WHERE user_id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/cart', methods=['POST'])
def addCart():

    user_id = request.json['user_id']
    product_id = request.json['product_id']
    quantity = request.json['quantity']


    mycursor = mydb.cursor()

    sql = "INSERT INTO cart ( user_id, product_id, quantity) VALUES (' "+str(user_id)+"', ' "+str(product_id)+"',' "+str(quantity)+"')"

    mycursor.execute(sql)

    if mycursor.rowcount > 0:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",

            "error": False
        }


@app.route('/cart/<uservariable>', methods=['PUT'])
def updateCart(uservariable):

    quantity = request.json['quantity']

    mycursor = mydb.cursor()

    sql = "UPDATE products SET quantity = '"+str(quantity)+"' WHERE id = '"+str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }

@app.route('/cart/<uservariable>', methods=['DELETE'])
def deleteCart(uservariable):


    mycursor = mydb.cursor()

    sql = "DELETE FROM cart  WHERE id = '"+str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "Deletion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/order', methods=['GET'])
def getOrders():

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM orders")

    userRow = mycursor.fetchall()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": " successful",
            "data": userRow,
            "error": False
        }


@app.route('/order/<uservariable>', methods=['GET'])
def getOrderbyId(uservariable):

    # user_id = request.json['user_id']


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM orders  WHERE id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/order', methods=['POST'])
def createOrder():

    user_id = request.json['user_id']
    delivery_phone = request.json['delivery_phone']
    delivery_address = request.json['delivery_address']
    delivery_method = request.json['delivery_method']
    delivery_status = request.json['delivery_status']
    delivery_cost = request.json['delivery_cost']
    payment_method = request.json['payment_method']
    payment_status = request.json['payment_status']
    payment_ref = request.json['payment_ref']
    total_cost = request.json['total_cost']



    mycursor = mydb.cursor()

    sql = "INSERT INTO `orders`( `user_id`, `delivery_phone`, `delivery_address`, `delivery_method`, `delivery_status`, `delivery_cost`, `payment_method`, `payment_status`,`payment_ref`, `total_cost`) VALUES ( '"+str(user_id)+"','"+str(delivery_phone)+"', '"+delivery_address+"','"+delivery_method+"','"+delivery_status+"', '"+str(delivery_cost)+"', '"+payment_method+"','"+payment_status+"', '"+payment_ref+"', '"+str(total_cost)+"')"

    mycursor.execute(sql)

    if mycursor.rowcount > 0:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",

            "error": False
        }




@app.route('/order/<uservariable>/user', methods=['GET'])
def getOrdersbyId(uservariable):

    # user_id = request.json['user_id']


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM orders  WHERE user_id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/order/', methods=['PUT'])
def updateOrder():

    payment_method = request.json['payment_method']
    user_id = request.json['user_id']


    mycursor = mydb.cursor()

    sql = "UPDATE orders SET payment_method = '"+str(payment_method)+"' WHERE id = '"+str(user_id )+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/order/<uservariable>', methods=['DELETE'])
def deleteOrder(uservariable):


    mycursor = mydb.cursor()

    sql = "DELETE FROM orders  WHERE id = '"+str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "Deletion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/wishlist', methods=['POST'])
def addWishlist():

    user_id = request.json['user_id']
    product_id = request.json['product_id']


    mycursor = mydb.cursor()

    sql = "INSERT INTO wishlist (user_id, product_id ) VALUES ('" + str(user_id) + "','" + str(product_id) + "')"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "insertion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }


@app.route('/wishlist/<uservariable>/user', methods=['GET'])
def getUsers(uservariable):


    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM wishlist  WHERE id = ' "+str(uservariable)+"' ")

    userRow = mycursor.fetchone()
    if userRow is None:
        return {
            "error": True,
            "message": "Invalid credentials"
        }
    else:
        return {
            "message": "Login successful",
            "data": userRow,
            "error": False
        }


@app.route('/wishlist/<uservariable>', methods=['DELETE'])
def deleteWishlist(uservariable):


    mycursor = mydb.cursor()

    sql = "DELETE FROM wishlist  WHERE id = '"+str(uservariable)+"'"

    mycursor.execute(sql)
    if mycursor.rowcount > 0:
        return {
            "message": "Deletion successful",
            "error": False
        }

    else:
        return {
            "error": True,
            "message": "OOps! Something happened"
        }