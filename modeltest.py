import joblib
import feature_extraction as fe


features = fe.extract_features("https://github.com/Vnjvibhash/Based-on-Flask-App/tree/main")
print(features)

to_predict_list = [12344]+features

# to_predict_list = [12344,-1,1,1,1,-1,-1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,-1,0,1,1,1,1,-1,-1,-1,-1,1,1,-1]
loaded_model = joblib.load("modelfreshvikram")
result = loaded_model.predict([to_predict_list])
if int(result)== 1:
    prediction ='Given site is NOT fradulent'
else:
    prediction ='Given site is fradulent'

print(prediction)



# [12344,-1,1,1,1,-1,-1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,-1,0,1,1,1,1,-1,-1,-1,-1,1,1,-1]