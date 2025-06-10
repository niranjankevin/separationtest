function baseSchema(domain) {
    return dataform.projectConfig.vars.weather_export_dataset + "_" + domain + "_base" ;
}

module.exports = {baseSchema};