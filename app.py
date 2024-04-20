import numpy as np
from flask import Flask, request, jsonify, render_template
import joblib
import joblib
import feature_extraction as fe
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


# prediction function 
# def ValuePredictor(to_predict_list): 
#     to_predict = np.array(to_predict_list).reshape(1, 7) 
#     loaded_model = joblib.load("modelfreshvikram") 
#     result = loaded_model.predict([to_predict]) 
#     return result[0]     

# @app.route('/')
# def home():
#     return render_template("index.html")

def check_fraud(url):
    print("url",url)
    features = fe.extract_features(url)
    print(features)

    to_predict_list = features
    # [12344]+

    # to_predict_list = [12344,-1,1,1,1,-1,-1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,-1,0,1,1,1,1,-1,-1,-1,-1,1,1,-1]
    loaded_model = joblib.load("modelfreshvikram")
    result = loaded_model.predict([to_predict_list])
    if result== 1:
        prediction ='Given site is NOT fradulent'
    else:
        prediction ='Given site is fradulent'
    print(result)
    return result

# -1 is fraud and 1 is not fraud
@app.route('/predict',methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def predict():
    if request.method == 'POST':
        data = request.get_json(force=True)
        result = check_fraud(data.get('url'))
        if int(result[0])== 1:
            prediction ='Given site is NOT fradulent'
        else:
            prediction ='Given site is fradulent'
    return jsonify({'prediction': prediction, 'result': int(result[0])}) 


if __name__ == "__main__":
    app.run(debug=True)