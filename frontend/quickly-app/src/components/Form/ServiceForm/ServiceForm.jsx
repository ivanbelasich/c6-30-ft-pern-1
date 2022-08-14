import React from 'react';
import { View, TextInput, TouchableWithoutFeedback, Text } from 'react-native';

import { Formik } from 'formik';
import * as Yup from "yup";

import { CheckBox } from '../../CheckBox/CheckBox';

// Styles
import globalStyles from '../../../globalStyles/globalStyles';
import { styles } from './styles';

// Utils
import { arrayDate } from '../../../utils/arrayDate';


export const ServiceForm = () => {

    const initialValues = {
        name: "",
        value: "",
        description: "",
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        from: "",
        to: "",
    }

    const required = "*Campo obligatorio"

    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(6, "*La cantidad mínima de caracteres es 6.")
          .required(required),
        value: Yup.string(),
        description: Yup.string().required(required),
        from: Yup.number().integer("*Debe ser un número entero").required(required).max(23,"*Debe ser un número menor a 23").min(0,"Debe ser un número mayor a 0"),
        to: Yup.number().integer("*Debe ser un número entero").required(required).max(23,"*Debe ser un número menor a 23").min(0,"Debe ser un número mayor a 0"),
    });

    const handleSubmit = (values) => {
        const sendValues = {
            name: values.name,
            value: values.value,
            description: values.description,
            date: {
                monday: values.monday ? arrayDate(values.from, values.to) : [],
                tuesday: values.tuesday ? arrayDate(values.from, values.to) : [],
                wednesday: values.wednesday ? arrayDate(values.from, values.to) : [],
                thursday: values.thursday ? arrayDate(values.from, values.to) : [],
                friday: values.friday ? arrayDate(values.from, values.to) : [],
                saturday: values.saturday ? arrayDate(values.from, values.to) : [],
                sunday: values.sunday ? arrayDate(values.from, values.to) : [],
            }
        }
        console.log(sendValues);
    }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {
            ({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
                <View>
                    <View style={globalStyles.inputContainer}>
                        <Text style={globalStyles.label}>Nombre</Text>
                        <TextInput style={globalStyles.input} onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values?.name}/>
                        {
                            errors.name && <Text style={globalStyles.textError}>{errors.name}</Text>
                        }
                    </View>
                    <View style={globalStyles.inputContainer}>
                        <Text style={globalStyles.label}>Precio</Text>
                        <TextInput style={globalStyles.input} onChangeText={handleChange('value')} onBlur={handleBlur('value')} value={values?.value}/>
                        {
                            errors.value && <Text style={globalStyles.textError}>{errors.value}</Text>
                        }
                    </View>
                    <View style={globalStyles.inputContainer}>
                        <Text style={globalStyles.label}>Descripción</Text>
                        <TextInput style={globalStyles.input} onChangeText={handleChange('description')} onBlur={handleBlur('description')} value={values?.description}/>
                        {
                            errors.description && <Text style={globalStyles.textError}>{errors.description}</Text>
                        }
                    </View>
                    <Text style={globalStyles.label}>Días</Text>
                    <View style={styles.days}>
                        <View style={styles.day}>
                            <CheckBox value={values?.monday} handleChange={nextValue => setFieldValue('monday', nextValue)}>Lunes</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.tuesday} handleChange={nextValue => setFieldValue('tuesday', nextValue)}>Martes</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.wednesday} handleChange={nextValue => setFieldValue('wednesday', nextValue)}>Miércoles</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.thursday} handleChange={nextValue => setFieldValue('thursday', nextValue)}>Jueves</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.friday} handleChange={nextValue => setFieldValue('friday', nextValue)}>Viernes</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.saturday} handleChange={nextValue => setFieldValue('saturday', nextValue)}>Sábado</CheckBox>
                        </View>
                        <View style={styles.day}>
                            <CheckBox value={values?.sunday} handleChange={nextValue => setFieldValue('sunday', nextValue)}>Domingo</CheckBox>
                        </View>
                    </View>
                    <View>
                        <Text style={globalStyles.label}>Desde</Text>
                        <TextInput style={globalStyles.input} onChangeText={handleChange('from')} onBlur={handleBlur('from')} value={values?.from} keyboardType="numeric" maxLength={2}/>
                        {
                            errors.from && <Text style={globalStyles.textError}>{errors.from}</Text>
                        }
                        <Text style={globalStyles.label}>Hasta</Text>
                        <TextInput style={globalStyles.input} onChangeText={handleChange('to')} onBlur={handleBlur('to')} value={values?.to} keyboardType="numeric" maxLength={2}/>
                        {
                            errors.to && <Text style={globalStyles.textError}>{errors.to}</Text>
                        }
                    </View>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={[globalStyles.button, globalStyles.normalButton]}>
                            <Text style={globalStyles.textButton}>Crear</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
        }
    </Formik>
  )
}
