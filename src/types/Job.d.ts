export type SeasonalJobSearchResponse = {
    "@odata.context": string,
    "@odata.count": number,
    "@search.facets": JobCounts, 
    "value": Job[],
}

export type JobCount = {
    "count": number,
    "value": string,
}

export type JobCounts = {
    "job_title": JobCount[]
}

export type JobCoord = {
    'type': string,
    'coordinates': number[],
    'crs': any 
}

export type Job = {
 '@search.score': number,
 'case_id': string,
 'case_status': string, 
 'active': boolean, 
 'document_available': boolean, 
 'case_number': string,
 'job_order_id': string, 
 'crop': string, 
 'job_title': string, 
 'job_duties': string,
 'work_hour_num_basic': number, 
 'total_positions': number, 
 'basic_rate_to': number, 
 'basic_rate_from': number, 
 'overtime_rate_to': number, 
 'overtime_rate_from': number, 
 'full_time': boolean,
 'hourly_work_schedule_am': string, 
 'hourly_work_schedule_pm': string, 
 'begin_date': Date,
 'end_date': Date,
 'emp_experience_reqd': boolean, 
 'emp_exp_num_months': number,
 'special_req': string,
 'training_req': boolean, 
 'num_months_training': number,
 'education_level': string,
 'name_reqd_training': string, 
 'pay_range_desc': string,
 'employer_business_name': string,
 'employer_trade_name': string, 
 'employer_city': string,
 'employer_state': string,
 'employer_zip': string,
 'employer_phone': string,
 'employer_phone_ext': string, 
 'employer_email': string,
 'naic_id': string,
 'naic_description': string, 
 'visa_class': string,
 'worksite_locations': boolean, 
 'worksite_address': string,
 'add_wage_info': string, 
 'worksite_address_alt': string,
 'worksite_city': string,
 'worksite_state': string,
 'worksite_zip': string,
 'accepted_date': string,
 'affirmed_date': string,
 'soc_code_id': string,
 'soc_title': string,
 'soc_description': string, 
 'coord': JobCoord,
 'job_order_exists': boolean, 
 'apply_email': string,
 'apply_phone': string,
 'apply_url': string,
 'oflc_cms': boolean, 
 'popularity': number, 
 'display': boolean, 
 'eventId': number, 
 'dhTimestamp': string
}