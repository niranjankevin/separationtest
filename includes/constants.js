function baseSchema(domain) {
    var output_table = dataform.projectConfig.vars.weather_export_dataset + "v1";
    return output_table + "_" + domain + "_base" ;
}

module.exports = {baseSchema};