def index():

   car_list = ["Honda", "Subaru", "Toyota", "Kia", "Jeep"]

   return render_template("index.html", list=car_list)