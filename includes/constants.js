function baseSchema(domain) {
    var output_table = dataform.projectConfig.vars.weather_export_dataset + "v1";
    return output_table + "_" + domain + "_base";
}

const RAW_DATASET_NAME = "raw_data";
const STAGING_DATASET_NAME = "staging_data";
const FACT_TABLE_PREFIX = "fact_";

module.exports = {
    baseSchema,
    RAW_DATASET_NAME,
    STAGING_DATASET_NAME,
    FACT_TABLE_PREFIX,
    dflt_project: "preston-307021",
    marketting_ds: "ds_dbi_marketing",
    data_prp_ds: "ds_dbi_dataprep",
    insight_ds: "us_dataset"
};
