from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import tensorflow as tf
import numpy as np
import os

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/scanner', methods=['POST'])
async def scanner():
    f = request.files['file']

    # save file
    f.save(os.path.join('uploads', secure_filename(f.filename)))

    # run tflite model
    interpreter = tf.lite.Interpreter(model_path="detect.tflite")
    interpreter.allocate_tensors()
    # Get model details
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    height = input_details[0]['shape'][1]
    width = input_details[0]['shape'][2]

    float_input = (input_details[0]['dtype'] == np.float32)

    input_mean = 127.5
    input_std = 127.5

    return {"output_data": output_data}  # Return prediction result