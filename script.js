// Data for dependent dropdowns
const tlOptions = {
  "O&M": ["PANDIYAN.R", "RAJPRABHAKAR R", "SHASHIKUMAR CC"],
  "P&M": ["Praveen KS"],
  "RR": ["SIVA.LAKSHMIPATHI", "PRASHANTHS.26255"],
  "Special Project": ["Deepak.s"]
};

const neNameData = {
  "O&M": {
    "North": [
      "Basavanagowda_26055",
      "Basavaraj_30170",
      "Chennakeshav_26990",
      "Davalasab_30697",
      "Kadiyala Sreenivaulu_31069"
    ],
    "South": [
      "Balaji K _28354",
      "Gangaraju G_32587",
      "Mallikarjun Pujar_34285"
    ]
  },
  "P&M": {
    "North": [
      "Vignesh Mayandi _38533",
      "Harshith Kumar_31905",
      "Umesh_37937"
    ],
    "South": [
      "Abhishek _32010",
      "Pugalandhi K _28142"
    ]
  },
  "RR": {
    "North": [
      "Vamshidhar V_30337",
      "Sanjay Venugopal_31265"
    ],
    "South": [
      "Abhishek N",
      "Hemanth Kumar"
    ]
  },
  "Special Project": {
    "North": [
      "Raghaveandra K R ._28755",
      "Shivashankar_32075",
      "Ramakrishna_39406"
    ],
    "South": []
  }
};

const vendorNamesData = {
  "O&M": {
    "North": {
      "FRT": ["SLV -MLM", "SVT - BSW", "SVT - RTN", "SVT - YEL"],
      "CIVIL": ["MOHAN - CIVIL-12/7 (MLM)", "SVT - CIVIL-12/7 (RTN)", "SVT - CIVIL-12/7 (YLK)"],
      "Van Vendor": ["Van Vendor_1"]
    },
    "South": {
      "FRT": ["MOHAN-BSK", "SVT -IND", "SVT - BTM", "SVT - SAR", "YKD -BLD", "TP -BLD"],
      "CIVIL": ["MOHAN - CIVIL-12/7 (BSK)", "MOHAN - CIVIL-12/7 (BLD)", "TP - CIVIL 12/7 (SAR)"],
      "Van Vendor": ["Van Vendor_1"]
    }
  },
  "P&M": {
    "North": {
      "FRT": ["SLV_2"]
    },
    "South": {
      "FRT": ["SLV_1"]
    }
  },
  "RR": {
    "North": {
      "FRT": ["SVT-1", "SVT-2"]
    },
    "South": {
      "FRT": ["SVT-1", "TP-1"]
    }
  },
  "Special Project": {
    "North": {
      "FRT": ["SVT - NAB"],
      "CIVIL": ["YKD -CIVIL 12/7", "SLV - CIVIL-12/7"]
    }
  }
};

// Function to update TL Name options based on Function
function updateTLOptions() {
  const functionSelect = document.getElementById('function');
  const tlSelect = document.getElementById('tl_name');
  const selectedFunction = functionSelect.value;

  tlSelect.innerHTML = '';

  if (selectedFunction && tlOptions[selectedFunction]) {
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select TL Name";
    tlSelect.appendChild(defaultOption);

    tlOptions[selectedFunction].forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      option.text = name;
      tlSelect.appendChild(option);
    });
  } else {
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select Function First";
    tlSelect.appendChild(defaultOption);
  }
}

// Function to update Ne_Name options based on Function and Zone
function updateNeNameOptions() {
  const functionSelect = document.getElementById('function');
  const zoneSelect = document.getElementById('zone');
  const neNameSelect = document.getElementById('ne_name');

  const selectedFunction = functionSelect.value;
  const selectedZone = zoneSelect.value;

  neNameSelect.innerHTML = '';

  if (
    selectedFunction &&
    selectedZone &&
    neNameData[selectedFunction] &&
    neNameData[selectedFunction][selectedZone]
  ) {
    const neNames = neNameData[selectedFunction][selectedZone];

    if (neNames.length > 0) {
      const defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.text = "Select Ne_Name";
      neNameSelect.appendChild(defaultOption);

      neNames.forEach(ne => {
        const option = document.createElement('option');
        option.value = ne;
        option.text = ne;
        neNameSelect.appendChild(option);
      });
    } else {
      const option = document.createElement('option');
      option.value = "";
      option.text = "No Ne_Name available";
      neNameSelect.appendChild(option);
    }
  } else {
    const option = document.createElement('option');
    option.value = "";
    option.text = "Select Function and Zone";
    neNameSelect.appendChild(option);
  }
}

// Function to update Vendor Name options based on Function, Zone, and Vendor Type
function updateVendorNameOptions() {
  const functionSelect = document.getElementById('function');
  const zoneSelect = document.getElementById('zone');
  const vendorTypeSelect = document.getElementById('vendor_type');
  const vendorNameSelect = document.getElementById('vendor_name');

  const selectedFunction = functionSelect.value;
  const selectedZone = zoneSelect.value;
  const selectedVendorType = vendorTypeSelect.value;

  vendorNameSelect.innerHTML = '';

  if (
    selectedFunction &&
    selectedZone &&
    selectedVendorType &&
    vendorNamesData[selectedFunction] &&
    vendorNamesData[selectedFunction][selectedZone] &&
    vendorNamesData[selectedFunction][selectedZone][selectedVendorType]
  ) {
    const vendorNames =
      vendorNamesData[selectedFunction][selectedZone][selectedVendorType];

    if (vendorNames.length > 0) {
      const defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.text = "Select Vendor Name";
      vendorNameSelect.appendChild(defaultOption);

      vendorNames.forEach(vendor => {
        const option = document.createElement('option');
        option.value = vendor;
        option.text = vendor;
        vendorNameSelect.appendChild(option);
      });
    } else {
      const option = document.createElement('option');
      option.value = "";
      option.text = "No Vendor Name available";
      vendorNameSelect.appendChild(option);
    }
  } else {
    const option = document.createElement('option');
    option.value = "";
    option.text = "Select Vendor Type";
    vendorNameSelect.appendChild(option);
  }
}

// Show/hide conditional fields based on Status and VENDOR_TYPE
function handleStatusChange() {
  const status = document.getElementById('Status').value;
  const vendorType = document.getElementById('vendor_type').value;

  const vendorInTimeDiv = document.getElementById('vendor_in_time_div');
  const reportingLocationDiv = document.getElementById('reporting_location_div');
  const intimeVehicleDiv = document.getElementById('intime_vehicle_div');

  if (status === 'Present') {
    vendorInTimeDiv.style.display = 'block';
    reportingLocationDiv.style.display = 'block';
    intimeVehicleDiv.style.display = 'block';

    // Make required
    document.getElementById('vendor_in_time').required = true;
    document.getElementById('reporting_location').required = true;
    document.getElementById('intime_vehicle_reading').required = true;

    // Handle VENDOR_TYPE specific fields
    handleVendorTypeChange();
  } else {
    vendorInTimeDiv.style.display = 'none';
    reportingLocationDiv.style.display = 'none';
    intimeVehicleDiv.style.display = 'none';

    // Remove required
    document.getElementById('vendor_in_time').required = false;
    document.getElementById('reporting_location').required = false;
    document.getElementById('intime_vehicle_reading').required = false;

    // Hide FRT specific fields
    document.getElementById('frt_fields').style.display = 'none';
  }
}

// Show/hide FRT fields based on Vendor Type and Status
function handleVendorTypeChange() {
  const vendorType = document.getElementById('vendor_type').value;
  const status = document.getElementById('Status').value;
  const frtDiv = document.getElementById('frt_fields');

  if (status === 'Present' && vendorType === 'FRT') {
    frtDiv.style.display = 'block';

    // Set required fields for FRT
    document.getElementById('ne_splicing_machine').required = true;
    document.getElementById('ne_otdr').required = true;
    document.getElementById('otdr_status').required = true;
    document.getElementById('cleaver_status').required = true;
    document.getElementById('power_meter_status').required = true;
    document.getElementById('vfl_status').required = true;
    document.getElementById('materials_96f').required = true;
    document.getElementById('materials_24f').required = true;
    document.getElementById('materials_joint').required = true;
    document.getElementById('materials_tb').required = true;
    document.getElementById('vendor_emp_id1').required = true;
    document.getElementById('vendor_emp_id2').required = true;
  } else if (status === 'Present' && vendorType === 'CIVIL') {
    frtDiv.style.display = 'none'
    civil_vendor_section.style.display = 'block';
  }
  else if (status === 'Present' && vendorType === 'Van Vendor') {
    frtDiv.style.display = 'none'
    civil_vendor_section.style.display = 'none';
    van_vendor_section.style.display = 'block';
  }
  else {
    frtDiv.style.display = 'none';
    frtDiv.style.display = 'none'
    civil_vendor_section.style.display = 'none';

    // Remove required for FRT fields
    document.querySelectorAll('.frt_field').forEach(el => (el.required = false));
    document.getElementById('vendor_emp_id1').required = false;
    document.getElementById('vendor_emp_id2').required = false;
  }
}

// Validate Vendor EMP IDs (at least 9 digits, only numbers)
function validateVendorEmpId(id) {
  const val = document.getElementById(id).value.trim();
  const numberOnly = /^\d{9,}$/;
  if (val.includes(' ')) {
    alert('Vendor Emp ID cannot contain spaces.');
    document.getElementById(id).value = '';
  } else if (!numberOnly.test(val)) {
    alert('Vendor Emp ID must be at least 9 digits and numbers only.');
    document.getElementById(id).value = '';
  }
}


// Initialize event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Populate TL Name based on Function
  document
    .getElementById('function')
    .addEventListener('change', () => {
      updateTLOptions();
      updateNeNameOptions();
      updateVendorNameOptions();
    });

  // Populate Ne_Name based on Function and Zone
  document
    .getElementById('zone')
    .addEventListener('change', () => {
      updateNeNameOptions();
      updateVendorNameOptions();
    });

  // Populate Vendor Name based on Function, Zone, Vendor Type
  document
    .getElementById('vendor_type')
    .addEventListener('change', () => {
      updateVendorNameOptions();
      handleVendorTypeChange();
    });

  // Handle Status change
  document
    .getElementById('Status')
    .addEventListener('change', handleStatusChange);

  // Handle Vendor Type change
  document
    .getElementById('vendor_type')
    .addEventListener('change', handleVendorTypeChange);
});