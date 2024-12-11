import {DICOMTag} from "./types";

export const tags: DICOMTag[] = [
  {
    "Tag": "(0008,0001)",
    "Name": "Length to End",
    "Keyword": "LengthToEnd",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0005)",
    "Name": "Specific Character Set",
    "Keyword": "SpecificCharacterSet",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0006)",
    "Name": "Language Code Sequence",
    "Keyword": "LanguageCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0008)",
    "Name": "Image Type",
    "Keyword": "ImageType",
    "VR": "CS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0010)",
    "Name": "Recognition Code",
    "Keyword": "RecognitionCode",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0012)",
    "Name": "Instance Creation Date",
    "Keyword": "InstanceCreationDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0013)",
    "Name": "Instance Creation Time",
    "Keyword": "InstanceCreationTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0014)",
    "Name": "Instance Creator UID",
    "Keyword": "InstanceCreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0015)",
    "Name": "Instance Coercion DateTime",
    "Keyword": "InstanceCoercionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0016)",
    "Name": "SOP Class UID",
    "Keyword": "SOPClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0018)",
    "Name": "SOP Instance UID",
    "Keyword": "SOPInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,001A)",
    "Name": "Related General SOP Class UID",
    "Keyword": "RelatedGeneralSOPClassUID",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,001B)",
    "Name": "Original Specialized SOP Class UID",
    "Keyword": "OriginalSpecializedSOPClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0020)",
    "Name": "Study Date",
    "Keyword": "StudyDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0021)",
    "Name": "Series Date",
    "Keyword": "SeriesDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0022)",
    "Name": "Acquisition Date",
    "Keyword": "AcquisitionDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0023)",
    "Name": "Content Date",
    "Keyword": "ContentDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0024)",
    "Name": "Overlay Date",
    "Keyword": "OverlayDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0025)",
    "Name": "Curve Date",
    "Keyword": "CurveDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,002A)",
    "Name": "Acquisition DateTime",
    "Keyword": "AcquisitionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0030)",
    "Name": "Study Time",
    "Keyword": "StudyTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0031)",
    "Name": "Series Time",
    "Keyword": "SeriesTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0032)",
    "Name": "Acquisition Time",
    "Keyword": "AcquisitionTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0033)",
    "Name": "Content Time",
    "Keyword": "ContentTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0034)",
    "Name": "Overlay Time",
    "Keyword": "OverlayTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0035)",
    "Name": "Curve Time",
    "Keyword": "CurveTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0040)",
    "Name": "Data Set Type",
    "Keyword": "DataSetType",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0041)",
    "Name": "Data Set Subtype",
    "Keyword": "DataSetSubtype",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0042)",
    "Name": "Nuclear Medicine Series Type",
    "Keyword": "NuclearMedicineSeriesType",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0050)",
    "Name": "Accession Number",
    "Keyword": "AccessionNumber",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0051)",
    "Name": "Issuer of Accession Number Sequence",
    "Keyword": "IssuerOfAccessionNumberSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0052)",
    "Name": "Query/Retrieve Level",
    "Keyword": "QueryRetrieveLevel",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0053)",
    "Name": "Query/Retrieve View",
    "Keyword": "QueryRetrieveView",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0054)",
    "Name": "Retrieve AE Title",
    "Keyword": "RetrieveAETitle",
    "VR": "AE",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0056)",
    "Name": "Instance Availability",
    "Keyword": "InstanceAvailability",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0058)",
    "Name": "Failed SOP Instance UID List",
    "Keyword": "FailedSOPInstanceUIDList",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0060)",
    "Name": "Modality",
    "Keyword": "Modality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0061)",
    "Name": "Modalities in Study",
    "Keyword": "ModalitiesInStudy",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0062)",
    "Name": "SOP Classes in Study",
    "Keyword": "SOPClassesInStudy",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0064)",
    "Name": "Conversion Type",
    "Keyword": "ConversionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0068)",
    "Name": "Presentation Intent Type",
    "Keyword": "PresentationIntentType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0070)",
    "Name": "Manufacturer",
    "Keyword": "Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0080)",
    "Name": "Institution Name",
    "Keyword": "InstitutionName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0081)",
    "Name": "Institution Address",
    "Keyword": "InstitutionAddress",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0082)",
    "Name": "Institution Code Sequence",
    "Keyword": "InstitutionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0090)",
    "Name": "Referring Physician's Name",
    "Keyword": "ReferringPhysicianName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0092)",
    "Name": "Referring Physician's Address",
    "Keyword": "ReferringPhysicianAddress",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0094)",
    "Name": "Referring Physician's Telephone Numbers",
    "Keyword": "ReferringPhysicianTelephoneNumbers",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0096)",
    "Name": "Referring Physician Identification Sequence",
    "Keyword": "ReferringPhysicianIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0100)",
    "Name": "Code Value",
    "Keyword": "CodeValue",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0101)",
    "Name": "Extended Code Value",
    "Keyword": "ExtendedCodeValue",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(0008,0102)",
    "Name": "Coding Scheme Designator",
    "Keyword": "CodingSchemeDesignator",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0103)",
    "Name": "Coding Scheme Version",
    "Keyword": "CodingSchemeVersion",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0104)",
    "Name": "Code Meaning",
    "Keyword": "CodeMeaning",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0105)",
    "Name": "Mapping Resource",
    "Keyword": "MappingResource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0106)",
    "Name": "Context Group Version",
    "Keyword": "ContextGroupVersion",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0107)",
    "Name": "Context Group Local Version",
    "Keyword": "ContextGroupLocalVersion",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0108)",
    "Name": "Extended Code Meaning",
    "Keyword": "ExtendedCodeMeaning",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(0008,010B)",
    "Name": "Context Group Extension Flag",
    "Keyword": "ContextGroupExtensionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010C)",
    "Name": "Coding Scheme UID",
    "Keyword": "CodingSchemeUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010D)",
    "Name": "Context Group Extension Creator UID",
    "Keyword": "ContextGroupExtensionCreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010F)",
    "Name": "Context Identifier",
    "Keyword": "ContextIdentifier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0110)",
    "Name": "Coding Scheme Identification Sequence",
    "Keyword": "CodingSchemeIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0112)",
    "Name": "Coding Scheme Registry",
    "Keyword": "CodingSchemeRegistry",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0114)",
    "Name": "Coding Scheme External ID",
    "Keyword": "CodingSchemeExternalID",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0115)",
    "Name": "Coding Scheme Name",
    "Keyword": "CodingSchemeName",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0116)",
    "Name": "Coding Scheme Responsible Organization",
    "Keyword": "CodingSchemeResponsibleOrganization",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0117)",
    "Name": "Context UID",
    "Keyword": "ContextUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0201)",
    "Name": "Timezone Offset From UTC",
    "Keyword": "TimezoneOffsetFromUTC",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1000)",
    "Name": "Network ID",
    "Keyword": "NetworkID",
    "VR": "AE",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1010)",
    "Name": "Station Name",
    "Keyword": "StationName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1030)",
    "Name": "Study Description",
    "Keyword": "StudyDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1032)",
    "Name": "Procedure Code Sequence",
    "Keyword": "ProcedureCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,103E)",
    "Name": "Series Description",
    "Keyword": "SeriesDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,103F)",
    "Name": "Series Description Code Sequence",
    "Keyword": "SeriesDescriptionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1040)",
    "Name": "Institutional Department Name",
    "Keyword": "InstitutionalDepartmentName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1048)",
    "Name": "Physician(s) of Record",
    "Keyword": "PhysiciansOfRecord",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1049)",
    "Name": "Physician(s) of Record Identification Sequence",
    "Keyword": "PhysiciansOfRecordIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1050)",
    "Name": "Performing Physician's Name",
    "Keyword": "PerformingPhysicianName",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1052)",
    "Name": "Performing Physician Identification Sequence",
    "Keyword": "PerformingPhysicianIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1060)",
    "Name": "Name of Physician(s) Reading Study",
    "Keyword": "NameOfPhysiciansReadingStudy",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1062)",
    "Name": "Physician(s) Reading Study Identification Sequence",
    "Keyword": "PhysiciansReadingStudyIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1070)",
    "Name": "Operators' Name",
    "Keyword": "OperatorsName",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1072)",
    "Name": "Operator Identification Sequence",
    "Keyword": "OperatorIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1080)",
    "Name": "Admitting Diagnoses Description",
    "Keyword": "AdmittingDiagnosesDescription",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1084)",
    "Name": "Admitting Diagnoses Code Sequence",
    "Keyword": "AdmittingDiagnosesCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1090)",
    "Name": "Manufacturer's Model Name",
    "Keyword": "ManufacturerModelName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1100)",
    "Name": "Referenced Results Sequence",
    "Keyword": "ReferencedResultsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1110)",
    "Name": "Referenced Study Sequence",
    "Keyword": "ReferencedStudySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1111)",
    "Name": "Referenced Performed Procedure Step Sequence",
    "Keyword": "ReferencedPerformedProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1115)",
    "Name": "Referenced Series Sequence",
    "Keyword": "ReferencedSeriesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1120)",
    "Name": "Referenced Patient Sequence",
    "Keyword": "ReferencedPatientSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1125)",
    "Name": "Referenced Visit Sequence",
    "Keyword": "ReferencedVisitSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1130)",
    "Name": "Referenced Overlay Sequence",
    "Keyword": "ReferencedOverlaySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1134)",
    "Name": "Referenced Stereometric Instance Sequence",
    "Keyword": "ReferencedStereometricInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,113A)",
    "Name": "Referenced Waveform Sequence",
    "Keyword": "ReferencedWaveformSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1140)",
    "Name": "Referenced Image Sequence",
    "Keyword": "ReferencedImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1145)",
    "Name": "Referenced Curve Sequence",
    "Keyword": "ReferencedCurveSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,114A)",
    "Name": "Referenced Instance Sequence",
    "Keyword": "ReferencedInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,114B)",
    "Name": "Referenced Real World Value Mapping Instance Sequence",
    "Keyword": "ReferencedRealWorldValueMappingInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1150)",
    "Name": "Referenced SOP Class UID",
    "Keyword": "ReferencedSOPClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1155)",
    "Name": "Referenced SOP Instance UID",
    "Keyword": "ReferencedSOPInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,115A)",
    "Name": "SOP Classes Supported",
    "Keyword": "SOPClassesSupported",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1160)",
    "Name": "Referenced Frame Number",
    "Keyword": "ReferencedFrameNumber",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1161)",
    "Name": "Simple Frame List",
    "Keyword": "SimpleFrameList",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1162)",
    "Name": "Calculated Frame List",
    "Keyword": "CalculatedFrameList",
    "VR": "UL",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1163)",
    "Name": "TimeRange",
    "Keyword": "TimeRange",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0008,1164)",
    "Name": "Frame Extraction Sequence",
    "Keyword": "FrameExtractionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1167)",
    "Name": "Multi-frame Source SOP Instance UID",
    "Keyword": "MultiFrameSourceSOPInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1190)",
    "Name": "Retrieve URL",
    "Keyword": "RetrieveURL",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1195)",
    "Name": "Transaction UID",
    "Keyword": "TransactionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1196)",
    "Name": "Warning Reason",
    "Keyword": "WarningReason",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1197)",
    "Name": "Failure Reason",
    "Keyword": "FailureReason",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1198)",
    "Name": "Failed SOP Sequence",
    "Keyword": "FailedSOPSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1199)",
    "Name": "Referenced SOP Sequence",
    "Keyword": "ReferencedSOPSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1200)",
    "Name": "Studies Containing Other Referenced Instances Sequence",
    "Keyword": "StudiesContainingOtherReferencedInstancesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1250)",
    "Name": "Related Series Sequence",
    "Keyword": "RelatedSeriesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2110)",
    "Name": "Lossy Image Compression (Retired)",
    "Keyword": "LossyImageCompressionRetired",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2111)",
    "Name": "Derivation Description",
    "Keyword": "DerivationDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2112)",
    "Name": "Source Image Sequence",
    "Keyword": "SourceImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2120)",
    "Name": "Stage Name",
    "Keyword": "StageName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2122)",
    "Name": "Stage Number",
    "Keyword": "StageNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2124)",
    "Name": "Number of Stages",
    "Keyword": "NumberOfStages",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2127)",
    "Name": "View Name",
    "Keyword": "ViewName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2128)",
    "Name": "View Number",
    "Keyword": "ViewNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2129)",
    "Name": "Number of Event Timers",
    "Keyword": "NumberOfEventTimers",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,212A)",
    "Name": "Number of Views in Stage",
    "Keyword": "NumberOfViewsInStage",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2130)",
    "Name": "Event Elapsed Time(s)",
    "Keyword": "EventElapsedTimes",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,2132)",
    "Name": "Event Timer Name(s)",
    "Keyword": "EventTimerNames",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,2133)",
    "Name": "Event Timer Sequence",
    "Keyword": "EventTimerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2134)",
    "Name": "Event Time Offset",
    "Keyword": "EventTimeOffset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2135)",
    "Name": "Event Code Sequence",
    "Keyword": "EventCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2142)",
    "Name": "Start Trim",
    "Keyword": "StartTrim",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2143)",
    "Name": "Stop Trim",
    "Keyword": "StopTrim",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2144)",
    "Name": "Recommended Display Frame Rate",
    "Keyword": "RecommendedDisplayFrameRate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2200)",
    "Name": "Transducer Position",
    "Keyword": "TransducerPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2204)",
    "Name": "Transducer Orientation",
    "Keyword": "TransducerOrientation",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2208)",
    "Name": "Anatomic Structure",
    "Keyword": "AnatomicStructure",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2218)",
    "Name": "Anatomic Region Sequence",
    "Keyword": "AnatomicRegionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2220)",
    "Name": "Anatomic Region Modifier Sequence",
    "Keyword": "AnatomicRegionModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2228)",
    "Name": "Primary Anatomic Structure Sequence",
    "Keyword": "PrimaryAnatomicStructureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2229)",
    "Name": "Anatomic Structure, Space or Region Sequence",
    "Keyword": "AnatomicStructureSpaceOrRegionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2230)",
    "Name": "Primary Anatomic Structure Modifier Sequence",
    "Keyword": "PrimaryAnatomicStructureModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2240)",
    "Name": "Transducer Position Sequence",
    "Keyword": "TransducerPositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2242)",
    "Name": "Transducer Position Modifier Sequence",
    "Keyword": "TransducerPositionModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2244)",
    "Name": "Transducer Orientation Sequence",
    "Keyword": "TransducerOrientationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2246)",
    "Name": "Transducer Orientation Modifier Sequence",
    "Keyword": "TransducerOrientationModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2251)",
    "Name": "Anatomic Structure Space Or Region Code Sequence (Trial)",
    "Keyword": "AnatomicStructureSpaceOrRegionCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2253)",
    "Name": "Anatomic Portal Of Entrance Code Sequence (Trial)",
    "Keyword": "AnatomicPortalOfEntranceCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2255)",
    "Name": "Anatomic Approach Direction Code Sequence (Trial)",
    "Keyword": "AnatomicApproachDirectionCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2256)",
    "Name": "Anatomic Perspective Description (Trial)",
    "Keyword": "AnatomicPerspectiveDescriptionTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2257)",
    "Name": "Anatomic Perspective Code Sequence (Trial)",
    "Keyword": "AnatomicPerspectiveCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2258)",
    "Name": "Anatomic Location Of Examining Instrument Description (Trial)",
    "Keyword": "AnatomicLocationOfExaminingInstrumentDescriptionTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2259)",
    "Name": "Anatomic Location Of Examining Instrument Code Sequence (Trial)",
    "Keyword": "AnatomicLocationOfExaminingInstrumentCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,225A)",
    "Name": "Anatomic Structure Space Or Region Modifier Code Sequence (Trial)",
    "Keyword": "AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,225C)",
    "Name": "OnAxis Background Anatomic Structure Code Sequence (Trial)",
    "Keyword": "OnAxisBackgroundAnatomicStructureCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,3001)",
    "Name": "Alternate Representation Sequence",
    "Keyword": "AlternateRepresentationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,3010)",
    "Name": "Irradiation Event UID",
    "Keyword": "IrradiationEventUID",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,4000)",
    "Name": "Identifying Comments",
    "Keyword": "IdentifyingComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,9007)",
    "Name": "Frame Type",
    "Keyword": "FrameType",
    "VR": "CS",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0008,9092)",
    "Name": "Referenced Image Evidence Sequence",
    "Keyword": "ReferencedImageEvidenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9121)",
    "Name": "Referenced Raw Data Sequence",
    "Keyword": "ReferencedRawDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9123)",
    "Name": "Creator-Version UID",
    "Keyword": "CreatorVersionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9124)",
    "Name": "Derivation Image Sequence",
    "Keyword": "DerivationImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9154)",
    "Name": "Source Image Evidence Sequence",
    "Keyword": "SourceImageEvidenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9205)",
    "Name": "Pixel Presentation",
    "Keyword": "PixelPresentation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9206)",
    "Name": "Volumetric Properties",
    "Keyword": "VolumetricProperties",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9207)",
    "Name": "Volume Based Calculation Technique",
    "Keyword": "VolumeBasedCalculationTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9208)",
    "Name": "Complex Image Component",
    "Keyword": "ComplexImageComponent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9209)",
    "Name": "Acquisition Contrast",
    "Keyword": "AcquisitionContrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9215)",
    "Name": "Derivation Code Sequence",
    "Keyword": "DerivationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9237)",
    "Name": "Referenced Presentation State Sequence",
    "Keyword": "ReferencedPresentationStateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9410)",
    "Name": "Referenced Other Plane Sequence",
    "Keyword": "ReferencedOtherPlaneSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9458)",
    "Name": "Frame Display Sequence",
    "Keyword": "FrameDisplaySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9459)",
    "Name": "Recommended Display Frame Rate in Float",
    "Keyword": "RecommendedDisplayFrameRateInFloat",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9460)",
    "Name": "Skip Frame Range Flag",
    "Keyword": "SkipFrameRangeFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0010)",
    "Name": "Patient's Name",
    "Keyword": "PatientName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0020)",
    "Name": "Patient ID",
    "Keyword": "PatientID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0021)",
    "Name": "Issuer of Patient ID",
    "Keyword": "IssuerOfPatientID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0022)",
    "Name": "Type of Patient ID",
    "Keyword": "TypeOfPatientID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0024)",
    "Name": "Issuer of Patient ID Qualifiers Sequence",
    "Keyword": "IssuerOfPatientIDQualifiersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0030)",
    "Name": "Patient's Birth Date",
    "Keyword": "PatientBirthDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0032)",
    "Name": "Patient's Birth Time",
    "Keyword": "PatientBirthTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0040)",
    "Name": "Patient's Sex",
    "Keyword": "PatientSex",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0050)",
    "Name": "Patient's Insurance Plan Code Sequence",
    "Keyword": "PatientInsurancePlanCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0101)",
    "Name": "Patient's Primary Language Code Sequence",
    "Keyword": "PatientPrimaryLanguageCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0102)",
    "Name": "Patient's Primary Language Modifier Code Sequence",
    "Keyword": "PatientPrimaryLanguageModifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0200)",
    "Name": "Quality Control Subject",
    "Keyword": "QualityControlSubject",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0201)",
    "Name": "Quality Control Subject Type Code Sequence",
    "Keyword": "QualityControlSubjectTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1000)",
    "Name": "Other Patient IDs",
    "Keyword": "OtherPatientIDs",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,1001)",
    "Name": "Other Patient Names",
    "Keyword": "OtherPatientNames",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,1002)",
    "Name": "Other Patient IDs Sequence",
    "Keyword": "OtherPatientIDsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1005)",
    "Name": "Patient's Birth Name",
    "Keyword": "PatientBirthName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1010)",
    "Name": "Patient's Age",
    "Keyword": "PatientAge",
    "VR": "AS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1020)",
    "Name": "Patient's Size",
    "Keyword": "PatientSize",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1021)",
    "Name": "Patient's Size Code Sequence",
    "Keyword": "PatientSizeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1030)",
    "Name": "Patient's Weight",
    "Keyword": "PatientWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1040)",
    "Name": "Patient's Address",
    "Keyword": "PatientAddress",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1050)",
    "Name": "Insurance Plan Identification",
    "Keyword": "InsurancePlanIdentification",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0010,1060)",
    "Name": "Patient's Mother's Birth Name",
    "Keyword": "PatientMotherBirthName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1080)",
    "Name": "Military Rank",
    "Keyword": "MilitaryRank",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1081)",
    "Name": "Branch of Service",
    "Keyword": "BranchOfService",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1090)",
    "Name": "Medical Record Locator",
    "Keyword": "MedicalRecordLocator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2000)",
    "Name": "Medical Alerts",
    "Keyword": "MedicalAlerts",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2110)",
    "Name": "Allergies",
    "Keyword": "Allergies",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2150)",
    "Name": "Country of Residence",
    "Keyword": "CountryOfResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2152)",
    "Name": "Region of Residence",
    "Keyword": "RegionOfResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2154)",
    "Name": "Patient's Telephone Numbers",
    "Keyword": "PatientTelephoneNumbers",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2160)",
    "Name": "Ethnic Group",
    "Keyword": "EthnicGroup",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2180)",
    "Name": "Occupation",
    "Keyword": "Occupation",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21A0)",
    "Name": "Smoking Status",
    "Keyword": "SmokingStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21B0)",
    "Name": "Additional Patient History",
    "Keyword": "AdditionalPatientHistory",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21C0)",
    "Name": "Pregnancy Status",
    "Keyword": "PregnancyStatus",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21D0)",
    "Name": "Last Menstrual Date",
    "Keyword": "LastMenstrualDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21F0)",
    "Name": "Patient's Religious Preference",
    "Keyword": "PatientReligiousPreference",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2201)",
    "Name": "Patient Species Description",
    "Keyword": "PatientSpeciesDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2202)",
    "Name": "Patient Species Code Sequence",
    "Keyword": "PatientSpeciesCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2203)",
    "Name": "Patient's Sex Neutered",
    "Keyword": "PatientSexNeutered",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2210)",
    "Name": "Anatomical Orientation Type",
    "Keyword": "AnatomicalOrientationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2292)",
    "Name": "Patient Breed Description",
    "Keyword": "PatientBreedDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2293)",
    "Name": "Patient Breed Code Sequence",
    "Keyword": "PatientBreedCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2294)",
    "Name": "Breed Registration Sequence",
    "Keyword": "BreedRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2295)",
    "Name": "Breed Registration Number",
    "Keyword": "BreedRegistrationNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2296)",
    "Name": "Breed Registry Code Sequence",
    "Keyword": "BreedRegistryCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2297)",
    "Name": "Responsible Person",
    "Keyword": "ResponsiblePerson",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2298)",
    "Name": "Responsible Person Role",
    "Keyword": "ResponsiblePersonRole",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2299)",
    "Name": "Responsible Organization",
    "Keyword": "ResponsibleOrganization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,4000)",
    "Name": "Patient Comments",
    "Keyword": "PatientComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,9431)",
    "Name": "Examined Body Thickness",
    "Keyword": "ExaminedBodyThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0010)",
    "Name": "Clinical Trial Sponsor Name",
    "Keyword": "ClinicalTrialSponsorName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0020)",
    "Name": "Clinical Trial Protocol ID",
    "Keyword": "ClinicalTrialProtocolID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0021)",
    "Name": "Clinical Trial Protocol Name",
    "Keyword": "ClinicalTrialProtocolName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0030)",
    "Name": "Clinical Trial Site ID",
    "Keyword": "ClinicalTrialSiteID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0031)",
    "Name": "Clinical Trial Site Name",
    "Keyword": "ClinicalTrialSiteName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0040)",
    "Name": "Clinical Trial Subject ID",
    "Keyword": "ClinicalTrialSubjectID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0042)",
    "Name": "Clinical Trial Subject Reading ID",
    "Keyword": "ClinicalTrialSubjectReadingID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0050)",
    "Name": "Clinical Trial Time Point ID",
    "Keyword": "ClinicalTrialTimePointID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0051)",
    "Name": "Clinical Trial Time Point Description",
    "Keyword": "ClinicalTrialTimePointDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0060)",
    "Name": "Clinical Trial Coordinating Center Name",
    "Keyword": "ClinicalTrialCoordinatingCenterName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0062)",
    "Name": "Patient Identity Removed",
    "Keyword": "PatientIdentityRemoved",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0063)",
    "Name": "De-identification Method",
    "Keyword": "DeidentificationMethod",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0012,0064)",
    "Name": "De-identification Method Code Sequence",
    "Keyword": "DeidentificationMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0071)",
    "Name": "Clinical Trial Series ID",
    "Keyword": "ClinicalTrialSeriesID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0072)",
    "Name": "Clinical Trial Series Description",
    "Keyword": "ClinicalTrialSeriesDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0081)",
    "Name": "Clinical Trial Protocol Ethics Committee Name",
    "Keyword": "ClinicalTrialProtocolEthicsCommitteeName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0082)",
    "Name": "Clinical Trial Protocol Ethics Committee Approval Number",
    "Keyword": "ClinicalTrialProtocolEthicsCommitteeApprovalNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0083)",
    "Name": "Consent for Clinical Trial Use Sequence",
    "Keyword": "ConsentForClinicalTrialUseSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0084)",
    "Name": "Distribution Type",
    "Keyword": "DistributionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0085)",
    "Name": "Consent for Distribution Flag",
    "Keyword": "ConsentForDistributionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0014,0023)",
    "Name": "CAD File Format",
    "Keyword": "CADFileFormat",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0024)",
    "Name": "Component Reference System",
    "Keyword": "ComponentReferenceSystem",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0025)",
    "Name": "Component Manufacturing Procedure",
    "Keyword": "ComponentManufacturingProcedure",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0028)",
    "Name": "Component Manufacturer",
    "Keyword": "ComponentManufacturer",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0030)",
    "Name": "Material Thickness",
    "Keyword": "MaterialThickness",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0032)",
    "Name": "Material Pipe Diameter",
    "Keyword": "MaterialPipeDiameter",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0034)",
    "Name": "Material Isolation Diameter",
    "Keyword": "MaterialIsolationDiameter",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0042)",
    "Name": "Material Grade",
    "Keyword": "MaterialGrade",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0044)",
    "Name": "Material Properties Description",
    "Keyword": "MaterialPropertiesDescription",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0045)",
    "Name": "Material Properties File Format (Retired)",
    "Keyword": "MaterialPropertiesFileFormatRetired",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0046)",
    "Name": "Material Notes",
    "Keyword": "MaterialNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0050)",
    "Name": "Component Shape",
    "Keyword": "ComponentShape",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0052)",
    "Name": "Curvature Type",
    "Keyword": "CurvatureType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0054)",
    "Name": "Outer Diameter",
    "Keyword": "OuterDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0056)",
    "Name": "Inner Diameter",
    "Keyword": "InnerDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1010)",
    "Name": "Actual Environmental Conditions",
    "Keyword": "ActualEnvironmentalConditions",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1020)",
    "Name": "Expiry Date",
    "Keyword": "ExpiryDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1040)",
    "Name": "Environmental Conditions",
    "Keyword": "EnvironmentalConditions",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2002)",
    "Name": "Evaluator Sequence",
    "Keyword": "EvaluatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2004)",
    "Name": "Evaluator Number",
    "Keyword": "EvaluatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2006)",
    "Name": "Evaluator Name",
    "Keyword": "EvaluatorName",
    "VR": "PN",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2008)",
    "Name": "Evaluation Attempt",
    "Keyword": "EvaluationAttempt",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2012)",
    "Name": "Indication Sequence",
    "Keyword": "IndicationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2014)",
    "Name": "Indication Number",
    "Keyword": "IndicationNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2016)",
    "Name": "Indication Label",
    "Keyword": "IndicationLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2018)",
    "Name": "Indication Description",
    "Keyword": "IndicationDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201A)",
    "Name": "Indication Type",
    "Keyword": "IndicationType",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201C)",
    "Name": "Indication Disposition",
    "Keyword": "IndicationDisposition",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201E)",
    "Name": "Indication ROI Sequence",
    "Keyword": "IndicationROISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2030)",
    "Name": "Indication Physical Property Sequence",
    "Keyword": "IndicationPhysicalPropertySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2032)",
    "Name": "Property Label",
    "Keyword": "PropertyLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2202)",
    "Name": "Coordinate System Number of Axes",
    "Keyword": "CoordinateSystemNumberOfAxes",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2204)",
    "Name": "Coordinate System Axes Sequence",
    "Keyword": "CoordinateSystemAxesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2206)",
    "Name": "Coordinate System Axis Description",
    "Keyword": "CoordinateSystemAxisDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2208)",
    "Name": "Coordinate System Data Set Mapping",
    "Keyword": "CoordinateSystemDataSetMapping",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220A)",
    "Name": "Coordinate System Axis Number",
    "Keyword": "CoordinateSystemAxisNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220C)",
    "Name": "Coordinate System Axis Type",
    "Keyword": "CoordinateSystemAxisType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220E)",
    "Name": "Coordinate System Axis Units",
    "Keyword": "CoordinateSystemAxisUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2210)",
    "Name": "Coordinate System Axis Values",
    "Keyword": "CoordinateSystemAxisValues",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2220)",
    "Name": "Coordinate System Transform Sequence",
    "Keyword": "CoordinateSystemTransformSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2222)",
    "Name": "Transform Description",
    "Keyword": "TransformDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2224)",
    "Name": "Transform Number of Axes",
    "Keyword": "TransformNumberOfAxes",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2226)",
    "Name": "Transform Order of Axes",
    "Keyword": "TransformOrderOfAxes",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2228)",
    "Name": "Transformed Axis Units",
    "Keyword": "TransformedAxisUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,222A)",
    "Name": "Coordinate System Transform Rotation and Scale Matrix",
    "Keyword": "CoordinateSystemTransformRotationAndScaleMatrix",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,222C)",
    "Name": "Coordinate System Transform Translation Matrix",
    "Keyword": "CoordinateSystemTransformTranslationMatrix",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3011)",
    "Name": "Internal Detector Frame Time",
    "Keyword": "InternalDetectorFrameTime",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3012)",
    "Name": "Number of Frames Integrated",
    "Keyword": "NumberOfFramesIntegrated",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3020)",
    "Name": "Detector Temperature Sequence",
    "Keyword": "DetectorTemperatureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3022)",
    "Name": "Sensor Name",
    "Keyword": "SensorName",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3024)",
    "Name": "Horizontal Offset of Sensor",
    "Keyword": "HorizontalOffsetOfSensor",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3026)",
    "Name": "Vertical Offset of Sensor",
    "Keyword": "VerticalOffsetOfSensor",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3028)",
    "Name": "Sensor Temperature",
    "Keyword": "SensorTemperature",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3040)",
    "Name": "Dark Current Sequence",
    "Keyword": "DarkCurrentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3050)",
    "Name": "Dark Current Counts",
    "Keyword": "DarkCurrentCounts",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3060)",
    "Name": "Gain Correction Reference Sequence",
    "Keyword": "GainCorrectionReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3070)",
    "Name": "Air Counts",
    "Keyword": "AirCounts",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3071)",
    "Name": "KV Used in Gain Calibration",
    "Keyword": "KVUsedInGainCalibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3072)",
    "Name": "MA Used in Gain Calibration",
    "Keyword": "MAUsedInGainCalibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3073)",
    "Name": "Number of Frames Used for Integration",
    "Keyword": "NumberOfFramesUsedForIntegration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3074)",
    "Name": "Filter Material Used in Gain Calibration",
    "Keyword": "FilterMaterialUsedInGainCalibration",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3075)",
    "Name": "Filter Thickness Used in Gain Calibration",
    "Keyword": "FilterThicknessUsedInGainCalibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3076)",
    "Name": "Date of Gain Calibration",
    "Keyword": "DateOfGainCalibration",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3077)",
    "Name": "Time of Gain Calibration",
    "Keyword": "TimeOfGainCalibration",
    "VR": "TM",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3080)",
    "Name": "Bad Pixel Image",
    "Keyword": "BadPixelImage",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3099)",
    "Name": "Calibration Notes",
    "Keyword": "CalibrationNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4002)",
    "Name": "Pulser Equipment Sequence",
    "Keyword": "PulserEquipmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4004)",
    "Name": "Pulser Type",
    "Keyword": "PulserType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4006)",
    "Name": "Pulser Notes",
    "Keyword": "PulserNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4008)",
    "Name": "Receiver Equipment Sequence",
    "Keyword": "ReceiverEquipmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400A)",
    "Name": "Amplifier Type",
    "Keyword": "AmplifierType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400C)",
    "Name": "Receiver Notes",
    "Keyword": "ReceiverNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400E)",
    "Name": "Pre-Amplifier Equipment Sequence",
    "Keyword": "PreAmplifierEquipmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400F)",
    "Name": "Pre-Amplifier Notes",
    "Keyword": "PreAmplifierNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4010)",
    "Name": "Transmit Transducer Sequence",
    "Keyword": "TransmitTransducerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4011)",
    "Name": "Receive Transducer Sequence",
    "Keyword": "ReceiveTransducerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4012)",
    "Name": "Number of Elements",
    "Keyword": "NumberOfElements",
    "VR": "US",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4013)",
    "Name": "Element Shape",
    "Keyword": "ElementShape",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4014)",
    "Name": "Element Dimension A",
    "Keyword": "ElementDimensionA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4015)",
    "Name": "Element Dimension B",
    "Keyword": "ElementDimensionB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4016)",
    "Name": "Element Pitch A",
    "Keyword": "ElementPitchA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4017)",
    "Name": "Measured Beam Dimension A",
    "Keyword": "MeasuredBeamDimensionA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4018)",
    "Name": "Measured Beam Dimension B",
    "Keyword": "MeasuredBeamDimensionB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4019)",
    "Name": "Location of Measured Beam Diameter",
    "Keyword": "LocationOfMeasuredBeamDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401A)",
    "Name": "Nominal Frequency",
    "Keyword": "NominalFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401B)",
    "Name": "Measured Center Frequency",
    "Keyword": "MeasuredCenterFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401C)",
    "Name": "Measured Bandwidth",
    "Keyword": "MeasuredBandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401D)",
    "Name": "Element Pitch B",
    "Keyword": "ElementPitchB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4020)",
    "Name": "Pulser Settings Sequence",
    "Keyword": "PulserSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4022)",
    "Name": "Pulse Width",
    "Keyword": "PulseWidth",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4024)",
    "Name": "Excitation Frequency",
    "Keyword": "ExcitationFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4026)",
    "Name": "Modulation Type",
    "Keyword": "ModulationType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4028)",
    "Name": "Damping",
    "Keyword": "Damping",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4030)",
    "Name": "Receiver Settings Sequence",
    "Keyword": "ReceiverSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4031)",
    "Name": "Acquired Soundpath Length",
    "Keyword": "AcquiredSoundpathLength",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4032)",
    "Name": "Acquisition Compression Type",
    "Keyword": "AcquisitionCompressionType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4033)",
    "Name": "Acquisition Sample Size",
    "Keyword": "AcquisitionSampleSize",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4034)",
    "Name": "Rectifier Smoothing",
    "Keyword": "RectifierSmoothing",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4035)",
    "Name": "DAC Sequence",
    "Keyword": "DACSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4036)",
    "Name": "DAC Type",
    "Keyword": "DACType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4038)",
    "Name": "DAC Gain Points",
    "Keyword": "DACGainPoints",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,403A)",
    "Name": "DAC Time Points",
    "Keyword": "DACTimePoints",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,403C)",
    "Name": "DAC Amplitude",
    "Keyword": "DACAmplitude",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4040)",
    "Name": "Pre-Amplifier Settings Sequence",
    "Keyword": "PreAmplifierSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4050)",
    "Name": "Transmit Transducer Settings Sequence",
    "Keyword": "TransmitTransducerSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4051)",
    "Name": "Receive Transducer Settings Sequence",
    "Keyword": "ReceiveTransducerSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4052)",
    "Name": "Incident Angle",
    "Keyword": "IncidentAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4054)",
    "Name": "Coupling Technique",
    "Keyword": "CouplingTechnique",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4056)",
    "Name": "Coupling Medium",
    "Keyword": "CouplingMedium",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4057)",
    "Name": "Coupling Velocity",
    "Keyword": "CouplingVelocity",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4058)",
    "Name": "Probe Center Location X",
    "Keyword": "ProbeCenterLocationX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4059)",
    "Name": "Probe Center Location Z",
    "Keyword": "ProbeCenterLocationZ",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,405A)",
    "Name": "Sound Path Length",
    "Keyword": "SoundPathLength",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,405C)",
    "Name": "Delay Law Identifier",
    "Keyword": "DelayLawIdentifier",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4060)",
    "Name": "Gate Settings Sequence",
    "Keyword": "GateSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4062)",
    "Name": "Gate Threshold",
    "Keyword": "GateThreshold",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4064)",
    "Name": "Velocity of Sound",
    "Keyword": "VelocityOfSound",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4070)",
    "Name": "Calibration Settings Sequence",
    "Keyword": "CalibrationSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4072)",
    "Name": "Calibration Procedure",
    "Keyword": "CalibrationProcedure",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4074)",
    "Name": "Procedure Version",
    "Keyword": "ProcedureVersion",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4076)",
    "Name": "Procedure Creation Date",
    "Keyword": "ProcedureCreationDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4078)",
    "Name": "Procedure Expiration Date",
    "Keyword": "ProcedureExpirationDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407A)",
    "Name": "Procedure Last Modified Date",
    "Keyword": "ProcedureLastModifiedDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407C)",
    "Name": "Calibration Time",
    "Keyword": "CalibrationTime",
    "VR": "TM",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407E)",
    "Name": "Calibration Date",
    "Keyword": "CalibrationDate",
    "VR": "DA",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4080)",
    "Name": "Probe Drive Equipment Sequence",
    "Keyword": "ProbeDriveEquipmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4081)",
    "Name": "Drive Type",
    "Keyword": "DriveType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4082)",
    "Name": "Probe Drive Notes",
    "Keyword": "ProbeDriveNotes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4083)",
    "Name": "Drive Probe Sequence",
    "Keyword": "DriveProbeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4084)",
    "Name": "Probe Inductance",
    "Keyword": "ProbeInductance",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4085)",
    "Name": "Probe Resistance",
    "Keyword": "ProbeResistance",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4086)",
    "Name": "Receive Probe Sequence",
    "Keyword": "ReceiveProbeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4087)",
    "Name": "Probe Drive Settings Sequence",
    "Keyword": "ProbeDriveSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4088)",
    "Name": "Bridge Resistors",
    "Keyword": "BridgeResistors",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4089)",
    "Name": "Probe Orientation Angle",
    "Keyword": "ProbeOrientationAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408B)",
    "Name": "User Selected Gain Y",
    "Keyword": "UserSelectedGainY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408C)",
    "Name": "User Selected Phase",
    "Keyword": "UserSelectedPhase",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408D)",
    "Name": "User Selected Offset X",
    "Keyword": "UserSelectedOffsetX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408E)",
    "Name": "User Selected Offset Y",
    "Keyword": "UserSelectedOffsetY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4091)",
    "Name": "Channel Settings Sequence",
    "Keyword": "ChannelSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4092)",
    "Name": "Channel Threshold",
    "Keyword": "ChannelThreshold",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409A)",
    "Name": "Scanner Settings Sequence",
    "Keyword": "ScannerSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409B)",
    "Name": "Scan Procedure",
    "Keyword": "ScanProcedure",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409C)",
    "Name": "Translation Rate X",
    "Keyword": "TranslationRateX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409D)",
    "Name": "Translation Rate Y",
    "Keyword": "TranslationRateY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409F)",
    "Name": "Channel Overlap",
    "Keyword": "ChannelOverlap",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A0)",
    "Name": "Image Quality Indicator Type",
    "Keyword": "ImageQualityIndicatorType",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A1)",
    "Name": "Image Quality Indicator Material",
    "Keyword": "ImageQualityIndicatorMaterial",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A2)",
    "Name": "Image Quality Indicator Size",
    "Keyword": "ImageQualityIndicatorSize",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,5002)",
    "Name": "LINAC Energy",
    "Keyword": "LINACEnergy",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,5004)",
    "Name": "LINAC Output",
    "Keyword": "LINACOutput",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0018,0010)",
    "Name": "Contrast/Bolus Agent",
    "Keyword": "ContrastBolusAgent",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0012)",
    "Name": "Contrast/Bolus Agent Sequence",
    "Keyword": "ContrastBolusAgentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0014)",
    "Name": "Contrast/Bolus Administration Route Sequence",
    "Keyword": "ContrastBolusAdministrationRouteSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0015)",
    "Name": "Body Part Examined",
    "Keyword": "BodyPartExamined",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0020)",
    "Name": "Scanning Sequence",
    "Keyword": "ScanningSequence",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0021)",
    "Name": "Sequence Variant",
    "Keyword": "SequenceVariant",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0022)",
    "Name": "Scan Options",
    "Keyword": "ScanOptions",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0023)",
    "Name": "MR Acquisition Type",
    "Keyword": "MRAcquisitionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0024)",
    "Name": "Sequence Name",
    "Keyword": "SequenceName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0025)",
    "Name": "Angio Flag",
    "Keyword": "AngioFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0026)",
    "Name": "Intervention Drug Information Sequence",
    "Keyword": "InterventionDrugInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0027)",
    "Name": "Intervention Drug Stop Time",
    "Keyword": "InterventionDrugStopTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0028)",
    "Name": "Intervention Drug Dose",
    "Keyword": "InterventionDrugDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0029)",
    "Name": "Intervention Drug Code Sequence",
    "Keyword": "InterventionDrugCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,002A)",
    "Name": "Additional Drug Sequence",
    "Keyword": "AdditionalDrugSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0030)",
    "Name": "Radionuclide",
    "Keyword": "Radionuclide",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0031)",
    "Name": "Radiopharmaceutical",
    "Keyword": "Radiopharmaceutical",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0032)",
    "Name": "Energy Window Centerline",
    "Keyword": "EnergyWindowCenterline",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0033)",
    "Name": "Energy Window Total Width",
    "Keyword": "EnergyWindowTotalWidth",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0034)",
    "Name": "Intervention Drug Name",
    "Keyword": "InterventionDrugName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0035)",
    "Name": "Intervention Drug Start Time",
    "Keyword": "InterventionDrugStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0036)",
    "Name": "Intervention Sequence",
    "Keyword": "InterventionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0037)",
    "Name": "Therapy Type",
    "Keyword": "TherapyType",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0038)",
    "Name": "Intervention Status",
    "Keyword": "InterventionStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0039)",
    "Name": "Therapy Description",
    "Keyword": "TherapyDescription",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,003A)",
    "Name": "Intervention Description",
    "Keyword": "InterventionDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0040)",
    "Name": "Cine Rate",
    "Keyword": "CineRate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0042)",
    "Name": "Initial Cine Run State",
    "Keyword": "InitialCineRunState",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0050)",
    "Name": "Slice Thickness",
    "Keyword": "SliceThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0060)",
    "Name": "KVP",
    "Keyword": "KVP",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0070)",
    "Name": "Counts Accumulated",
    "Keyword": "CountsAccumulated",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0071)",
    "Name": "Acquisition Termination Condition",
    "Keyword": "AcquisitionTerminationCondition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0072)",
    "Name": "Effective Duration",
    "Keyword": "EffectiveDuration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0073)",
    "Name": "Acquisition Start Condition",
    "Keyword": "AcquisitionStartCondition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0074)",
    "Name": "Acquisition Start Condition Data",
    "Keyword": "AcquisitionStartConditionData",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0075)",
    "Name": "Acquisition Termination Condition Data",
    "Keyword": "AcquisitionTerminationConditionData",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0080)",
    "Name": "Repetition Time",
    "Keyword": "RepetitionTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0081)",
    "Name": "Echo Time",
    "Keyword": "EchoTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0082)",
    "Name": "Inversion Time",
    "Keyword": "InversionTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0083)",
    "Name": "Number of Averages",
    "Keyword": "NumberOfAverages",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0084)",
    "Name": "Imaging Frequency",
    "Keyword": "ImagingFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0085)",
    "Name": "Imaged Nucleus",
    "Keyword": "ImagedNucleus",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0086)",
    "Name": "Echo Number(s)",
    "Keyword": "EchoNumbers",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0087)",
    "Name": "Magnetic Field Strength",
    "Keyword": "MagneticFieldStrength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0088)",
    "Name": "Spacing Between Slices",
    "Keyword": "SpacingBetweenSlices",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0089)",
    "Name": "Number of Phase Encoding Steps",
    "Keyword": "NumberOfPhaseEncodingSteps",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0090)",
    "Name": "Data Collection Diameter",
    "Keyword": "DataCollectionDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0091)",
    "Name": "Echo Train Length",
    "Keyword": "EchoTrainLength",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0093)",
    "Name": "Percent Sampling",
    "Keyword": "PercentSampling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0094)",
    "Name": "Percent Phase Field of View",
    "Keyword": "PercentPhaseFieldOfView",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0095)",
    "Name": "Pixel Bandwidth",
    "Keyword": "PixelBandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1000)",
    "Name": "Device Serial Number",
    "Keyword": "DeviceSerialNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1002)",
    "Name": "Device UID",
    "Keyword": "DeviceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1003)",
    "Name": "Device ID",
    "Keyword": "DeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1004)",
    "Name": "Plate ID",
    "Keyword": "PlateID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1005)",
    "Name": "Generator ID",
    "Keyword": "GeneratorID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1006)",
    "Name": "Grid ID",
    "Keyword": "GridID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1007)",
    "Name": "Cassette ID",
    "Keyword": "CassetteID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1008)",
    "Name": "Gantry ID",
    "Keyword": "GantryID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1010)",
    "Name": "Secondary Capture Device ID",
    "Keyword": "SecondaryCaptureDeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1011)",
    "Name": "Hardcopy Creation Device ID",
    "Keyword": "HardcopyCreationDeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1012)",
    "Name": "Date of Secondary Capture",
    "Keyword": "DateOfSecondaryCapture",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1014)",
    "Name": "Time of Secondary Capture",
    "Keyword": "TimeOfSecondaryCapture",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1016)",
    "Name": "Secondary Capture Device Manufacturer",
    "Keyword": "SecondaryCaptureDeviceManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1017)",
    "Name": "Hardcopy Device Manufacturer",
    "Keyword": "HardcopyDeviceManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1018)",
    "Name": "Secondary Capture Device Manufacturer's Model Name",
    "Keyword": "SecondaryCaptureDeviceManufacturerModelName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1019)",
    "Name": "Secondary Capture Device Software Versions",
    "Keyword": "SecondaryCaptureDeviceSoftwareVersions",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,101A)",
    "Name": "Hardcopy Device Software Version",
    "Keyword": "HardcopyDeviceSoftwareVersion",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,101B)",
    "Name": "Hardcopy Device Manufacturer's Model Name",
    "Keyword": "HardcopyDeviceManufacturerModelName",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1020)",
    "Name": "Software Version(s)",
    "Keyword": "SoftwareVersions",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1022)",
    "Name": "Video Image Format Acquired",
    "Keyword": "VideoImageFormatAcquired",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1023)",
    "Name": "Digital Image Format Acquired",
    "Keyword": "DigitalImageFormatAcquired",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1030)",
    "Name": "Protocol Name",
    "Keyword": "ProtocolName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1040)",
    "Name": "Contrast/Bolus Route",
    "Keyword": "ContrastBolusRoute",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1041)",
    "Name": "Contrast/Bolus Volume",
    "Keyword": "ContrastBolusVolume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1042)",
    "Name": "Contrast/Bolus Start Time",
    "Keyword": "ContrastBolusStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1043)",
    "Name": "Contrast/Bolus Stop Time",
    "Keyword": "ContrastBolusStopTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1044)",
    "Name": "Contrast/Bolus Total Dose",
    "Keyword": "ContrastBolusTotalDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1045)",
    "Name": "Syringe Counts",
    "Keyword": "SyringeCounts",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1046)",
    "Name": "Contrast Flow Rate",
    "Keyword": "ContrastFlowRate",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1047)",
    "Name": "Contrast Flow Duration",
    "Keyword": "ContrastFlowDuration",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1048)",
    "Name": "Contrast/Bolus Ingredient",
    "Keyword": "ContrastBolusIngredient",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1049)",
    "Name": "Contrast/Bolus Ingredient Concentration",
    "Keyword": "ContrastBolusIngredientConcentration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1050)",
    "Name": "Spatial Resolution",
    "Keyword": "SpatialResolution",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1060)",
    "Name": "Trigger Time",
    "Keyword": "TriggerTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1061)",
    "Name": "Trigger Source or Type",
    "Keyword": "TriggerSourceOrType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1062)",
    "Name": "Nominal Interval",
    "Keyword": "NominalInterval",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1063)",
    "Name": "Frame Time",
    "Keyword": "FrameTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1064)",
    "Name": "Cardiac Framing Type",
    "Keyword": "CardiacFramingType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1065)",
    "Name": "Frame Time Vector",
    "Keyword": "FrameTimeVector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1066)",
    "Name": "Frame Delay",
    "Keyword": "FrameDelay",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1067)",
    "Name": "Image Trigger Delay",
    "Keyword": "ImageTriggerDelay",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1068)",
    "Name": "Multiplex Group Time Offset",
    "Keyword": "MultiplexGroupTimeOffset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1069)",
    "Name": "Trigger Time Offset",
    "Keyword": "TriggerTimeOffset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,106A)",
    "Name": "Synchronization Trigger",
    "Keyword": "SynchronizationTrigger",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,106C)",
    "Name": "Synchronization Channel",
    "Keyword": "SynchronizationChannel",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,106E)",
    "Name": "Trigger Sample Position",
    "Keyword": "TriggerSamplePosition",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1070)",
    "Name": "Radiopharmaceutical Route",
    "Keyword": "RadiopharmaceuticalRoute",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1071)",
    "Name": "Radiopharmaceutical Volume",
    "Keyword": "RadiopharmaceuticalVolume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1072)",
    "Name": "Radiopharmaceutical Start Time",
    "Keyword": "RadiopharmaceuticalStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1073)",
    "Name": "Radiopharmaceutical Stop Time",
    "Keyword": "RadiopharmaceuticalStopTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1074)",
    "Name": "Radionuclide Total Dose",
    "Keyword": "RadionuclideTotalDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1075)",
    "Name": "Radionuclide Half Life",
    "Keyword": "RadionuclideHalfLife",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1076)",
    "Name": "Radionuclide Positron Fraction",
    "Keyword": "RadionuclidePositronFraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1077)",
    "Name": "Radiopharmaceutical Specific Activity",
    "Keyword": "RadiopharmaceuticalSpecificActivity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1078)",
    "Name": "Radiopharmaceutical Start DateTime",
    "Keyword": "RadiopharmaceuticalStartDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1079)",
    "Name": "Radiopharmaceutical Stop DateTime",
    "Keyword": "RadiopharmaceuticalStopDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1080)",
    "Name": "Beat Rejection Flag",
    "Keyword": "BeatRejectionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1081)",
    "Name": "Low R-R Value",
    "Keyword": "LowRRValue",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1082)",
    "Name": "High R-R Value",
    "Keyword": "HighRRValue",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1083)",
    "Name": "Intervals Acquired",
    "Keyword": "IntervalsAcquired",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1084)",
    "Name": "Intervals Rejected",
    "Keyword": "IntervalsRejected",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1085)",
    "Name": "PVC Rejection",
    "Keyword": "PVCRejection",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1086)",
    "Name": "Skip Beats",
    "Keyword": "SkipBeats",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1088)",
    "Name": "Heart Rate",
    "Keyword": "HeartRate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1090)",
    "Name": "Cardiac Number of Images",
    "Keyword": "CardiacNumberOfImages",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1094)",
    "Name": "Trigger Window",
    "Keyword": "TriggerWindow",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1100)",
    "Name": "Reconstruction Diameter",
    "Keyword": "ReconstructionDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1110)",
    "Name": "Distance Source to Detector",
    "Keyword": "DistanceSourceToDetector",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1111)",
    "Name": "Distance Source to Patient",
    "Keyword": "DistanceSourceToPatient",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1114)",
    "Name": "Estimated Radiographic Magnification Factor",
    "Keyword": "EstimatedRadiographicMagnificationFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1120)",
    "Name": "Gantry/Detector Tilt",
    "Keyword": "GantryDetectorTilt",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1121)",
    "Name": "Gantry/Detector Slew",
    "Keyword": "GantryDetectorSlew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1130)",
    "Name": "Table Height",
    "Keyword": "TableHeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1131)",
    "Name": "Table Traverse",
    "Keyword": "TableTraverse",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1134)",
    "Name": "Table Motion",
    "Keyword": "TableMotion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1135)",
    "Name": "Table Vertical Increment",
    "Keyword": "TableVerticalIncrement",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1136)",
    "Name": "Table Lateral Increment",
    "Keyword": "TableLateralIncrement",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1137)",
    "Name": "Table Longitudinal Increment",
    "Keyword": "TableLongitudinalIncrement",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1138)",
    "Name": "Table Angle",
    "Keyword": "TableAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,113A)",
    "Name": "Table Type",
    "Keyword": "TableType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1140)",
    "Name": "Rotation Direction",
    "Keyword": "RotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1141)",
    "Name": "Angular Position",
    "Keyword": "AngularPosition",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1142)",
    "Name": "Radial Position",
    "Keyword": "RadialPosition",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1143)",
    "Name": "Scan Arc",
    "Keyword": "ScanArc",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1144)",
    "Name": "Angular Step",
    "Keyword": "AngularStep",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1145)",
    "Name": "Center of Rotation Offset",
    "Keyword": "CenterOfRotationOffset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1146)",
    "Name": "Rotation Offset",
    "Keyword": "RotationOffset",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1147)",
    "Name": "Field of View Shape",
    "Keyword": "FieldOfViewShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1149)",
    "Name": "Field of View Dimension(s)",
    "Keyword": "FieldOfViewDimensions",
    "VR": "IS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1150)",
    "Name": "Exposure Time",
    "Keyword": "ExposureTime",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1151)",
    "Name": "X-Ray Tube Current",
    "Keyword": "XRayTubeCurrent",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1152)",
    "Name": "Exposure",
    "Keyword": "Exposure",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1153)",
    "Name": "Exposure in µAs",
    "Keyword": "ExposureInuAs",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1154)",
    "Name": "Average Pulse Width",
    "Keyword": "AveragePulseWidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1155)",
    "Name": "Radiation Setting",
    "Keyword": "RadiationSetting",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1156)",
    "Name": "Rectification Type",
    "Keyword": "RectificationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,115A)",
    "Name": "Radiation Mode",
    "Keyword": "RadiationMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,115E)",
    "Name": "Image and Fluoroscopy Area Dose Product",
    "Keyword": "ImageAndFluoroscopyAreaDoseProduct",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1160)",
    "Name": "Filter Type",
    "Keyword": "FilterType",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1161)",
    "Name": "Type of Filters",
    "Keyword": "TypeOfFilters",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1162)",
    "Name": "Intensifier Size",
    "Keyword": "IntensifierSize",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1164)",
    "Name": "Imager Pixel Spacing",
    "Keyword": "ImagerPixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1166)",
    "Name": "Grid",
    "Keyword": "Grid",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1170)",
    "Name": "Generator Power",
    "Keyword": "GeneratorPower",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1180)",
    "Name": "Collimator/grid Name",
    "Keyword": "CollimatorGridName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1181)",
    "Name": "Collimator Type",
    "Keyword": "CollimatorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1182)",
    "Name": "Focal Distance",
    "Keyword": "FocalDistance",
    "VR": "IS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1183)",
    "Name": "X Focus Center",
    "Keyword": "XFocusCenter",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1184)",
    "Name": "Y Focus Center",
    "Keyword": "YFocusCenter",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1190)",
    "Name": "Focal Spot(s)",
    "Keyword": "FocalSpots",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1191)",
    "Name": "Anode Target Material",
    "Keyword": "AnodeTargetMaterial",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A0)",
    "Name": "Body Part Thickness",
    "Keyword": "BodyPartThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A2)",
    "Name": "Compression Force",
    "Keyword": "CompressionForce",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A4)",
    "Name": "Paddle Description",
    "Keyword": "PaddleDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1200)",
    "Name": "Date of Last Calibration",
    "Keyword": "DateOfLastCalibration",
    "VR": "DA",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1201)",
    "Name": "Time of Last Calibration",
    "Keyword": "TimeOfLastCalibration",
    "VR": "TM",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1210)",
    "Name": "Convolution Kernel",
    "Keyword": "ConvolutionKernel",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1240)",
    "Name": "Upper/Lower Pixel Values",
    "Keyword": "UpperLowerPixelValues",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1242)",
    "Name": "Actual Frame Duration",
    "Keyword": "ActualFrameDuration",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1243)",
    "Name": "Count Rate",
    "Keyword": "CountRate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1244)",
    "Name": "Preferred Playback Sequencing",
    "Keyword": "PreferredPlaybackSequencing",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1250)",
    "Name": "Receive Coil Name",
    "Keyword": "ReceiveCoilName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1251)",
    "Name": "Transmit Coil Name",
    "Keyword": "TransmitCoilName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1260)",
    "Name": "Plate Type",
    "Keyword": "PlateType",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1261)",
    "Name": "Phosphor Type",
    "Keyword": "PhosphorType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1300)",
    "Name": "Scan Velocity",
    "Keyword": "ScanVelocity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1301)",
    "Name": "Whole Body Technique",
    "Keyword": "WholeBodyTechnique",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1302)",
    "Name": "Scan Length",
    "Keyword": "ScanLength",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1310)",
    "Name": "Acquisition Matrix",
    "Keyword": "AcquisitionMatrix",
    "VR": "US",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0018,1312)",
    "Name": "In-plane Phase Encoding Direction",
    "Keyword": "InPlanePhaseEncodingDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1314)",
    "Name": "Flip Angle",
    "Keyword": "FlipAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1315)",
    "Name": "Variable Flip Angle Flag",
    "Keyword": "VariableFlipAngleFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1316)",
    "Name": "SAR",
    "Keyword": "SAR",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1318)",
    "Name": "dB/dt",
    "Keyword": "dBdt",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1400)",
    "Name": "Acquisition Device Processing Description",
    "Keyword": "AcquisitionDeviceProcessingDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1401)",
    "Name": "Acquisition Device Processing Code",
    "Keyword": "AcquisitionDeviceProcessingCode",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1402)",
    "Name": "Cassette Orientation",
    "Keyword": "CassetteOrientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1403)",
    "Name": "Cassette Size",
    "Keyword": "CassetteSize",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1404)",
    "Name": "Exposures on Plate",
    "Keyword": "ExposuresOnPlate",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1405)",
    "Name": "Relative X-Ray Exposure",
    "Keyword": "RelativeXRayExposure",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1411)",
    "Name": "Exposure Index",
    "Keyword": "ExposureIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1412)",
    "Name": "Target Exposure Index",
    "Keyword": "TargetExposureIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1413)",
    "Name": "Deviation Index",
    "Keyword": "DeviationIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1450)",
    "Name": "Column Angulation",
    "Keyword": "ColumnAngulation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1460)",
    "Name": "Tomo Layer Height",
    "Keyword": "TomoLayerHeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1470)",
    "Name": "Tomo Angle",
    "Keyword": "TomoAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1480)",
    "Name": "Tomo Time",
    "Keyword": "TomoTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1490)",
    "Name": "Tomo Type",
    "Keyword": "TomoType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1491)",
    "Name": "Tomo Class",
    "Keyword": "TomoClass",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1495)",
    "Name": "Number of Tomosynthesis Source Images",
    "Keyword": "NumberOfTomosynthesisSourceImages",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1500)",
    "Name": "Positioner Motion",
    "Keyword": "PositionerMotion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1508)",
    "Name": "Positioner Type",
    "Keyword": "PositionerType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1510)",
    "Name": "Positioner Primary Angle",
    "Keyword": "PositionerPrimaryAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1511)",
    "Name": "Positioner Secondary Angle",
    "Keyword": "PositionerSecondaryAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1520)",
    "Name": "Positioner Primary Angle Increment",
    "Keyword": "PositionerPrimaryAngleIncrement",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1521)",
    "Name": "Positioner Secondary Angle Increment",
    "Keyword": "PositionerSecondaryAngleIncrement",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1530)",
    "Name": "Detector Primary Angle",
    "Keyword": "DetectorPrimaryAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1531)",
    "Name": "Detector Secondary Angle",
    "Keyword": "DetectorSecondaryAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1600)",
    "Name": "Shutter Shape",
    "Keyword": "ShutterShape",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1602)",
    "Name": "Shutter Left Vertical Edge",
    "Keyword": "ShutterLeftVerticalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1604)",
    "Name": "Shutter Right Vertical Edge",
    "Keyword": "ShutterRightVerticalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1606)",
    "Name": "Shutter Upper Horizontal Edge",
    "Keyword": "ShutterUpperHorizontalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1608)",
    "Name": "Shutter Lower Horizontal Edge",
    "Keyword": "ShutterLowerHorizontalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1610)",
    "Name": "Center of Circular Shutter",
    "Keyword": "CenterOfCircularShutter",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1612)",
    "Name": "Radius of Circular Shutter",
    "Keyword": "RadiusOfCircularShutter",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1620)",
    "Name": "Vertices of the Polygonal Shutter",
    "Keyword": "VerticesOfThePolygonalShutter",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1622)",
    "Name": "Shutter Presentation Value",
    "Keyword": "ShutterPresentationValue",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1623)",
    "Name": "Shutter Overlay Group",
    "Keyword": "ShutterOverlayGroup",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1624)",
    "Name": "Shutter Presentation Color CIELab Value",
    "Keyword": "ShutterPresentationColorCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1700)",
    "Name": "Collimator Shape",
    "Keyword": "CollimatorShape",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1702)",
    "Name": "Collimator Left Vertical Edge",
    "Keyword": "CollimatorLeftVerticalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1704)",
    "Name": "Collimator Right Vertical Edge",
    "Keyword": "CollimatorRightVerticalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1706)",
    "Name": "Collimator Upper Horizontal Edge",
    "Keyword": "CollimatorUpperHorizontalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1708)",
    "Name": "Collimator Lower Horizontal Edge",
    "Keyword": "CollimatorLowerHorizontalEdge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1710)",
    "Name": "Center of Circular Collimator",
    "Keyword": "CenterOfCircularCollimator",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1712)",
    "Name": "Radius of Circular Collimator",
    "Keyword": "RadiusOfCircularCollimator",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1720)",
    "Name": "Vertices of the Polygonal Collimator",
    "Keyword": "VerticesOfThePolygonalCollimator",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1800)",
    "Name": "Acquisition Time Synchronized",
    "Keyword": "AcquisitionTimeSynchronized",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1801)",
    "Name": "Time Source",
    "Keyword": "TimeSource",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1802)",
    "Name": "Time Distribution Protocol",
    "Keyword": "TimeDistributionProtocol",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1803)",
    "Name": "NTP Source Address",
    "Keyword": "NTPSourceAddress",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2001)",
    "Name": "Page Number Vector",
    "Keyword": "PageNumberVector",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2002)",
    "Name": "Frame Label Vector",
    "Keyword": "FrameLabelVector",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2003)",
    "Name": "Frame Primary Angle Vector",
    "Keyword": "FramePrimaryAngleVector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2004)",
    "Name": "Frame Secondary Angle Vector",
    "Keyword": "FrameSecondaryAngleVector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2005)",
    "Name": "Slice Location Vector",
    "Keyword": "SliceLocationVector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2006)",
    "Name": "Display Window Label Vector",
    "Keyword": "DisplayWindowLabelVector",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2010)",
    "Name": "Nominal Scanned Pixel Spacing",
    "Keyword": "NominalScannedPixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,2020)",
    "Name": "Digitizing Device Transport Direction",
    "Keyword": "DigitizingDeviceTransportDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2030)",
    "Name": "Rotation of Scanned Film",
    "Keyword": "RotationOfScannedFilm",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2041)",
    "Name": "Biopsy Target Sequence",
    "Keyword": "BiopsyTargetSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2042)",
    "Name": "Target UID",
    "Keyword": "TargetUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2043)",
    "Name": "Localizing Cursor Position",
    "Keyword": "LocalizingCursorPosition",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,2044)",
    "Name": "Calculated Target Position",
    "Keyword": "CalculatedTargetPosition",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,2045)",
    "Name": "Target Label",
    "Keyword": "TargetLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2046)",
    "Name": "Displayed Z Value",
    "Keyword": "DisplayedZValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3100)",
    "Name": "IVUS Acquisition",
    "Keyword": "IVUSAcquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3101)",
    "Name": "IVUS Pullback Rate",
    "Keyword": "IVUSPullbackRate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3102)",
    "Name": "IVUS Gated Rate",
    "Keyword": "IVUSGatedRate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3103)",
    "Name": "IVUS Pullback Start Frame Number",
    "Keyword": "IVUSPullbackStartFrameNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3104)",
    "Name": "IVUS Pullback Stop Frame Number",
    "Keyword": "IVUSPullbackStopFrameNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3105)",
    "Name": "Lesion Number",
    "Keyword": "LesionNumber",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,4000)",
    "Name": "Acquisition Comments",
    "Keyword": "AcquisitionComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5000)",
    "Name": "Output Power",
    "Keyword": "OutputPower",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,5010)",
    "Name": "Transducer Data",
    "Keyword": "TransducerData",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,5012)",
    "Name": "Focus Depth",
    "Keyword": "FocusDepth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5020)",
    "Name": "Processing Function",
    "Keyword": "ProcessingFunction",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5021)",
    "Name": "Postprocessing Function",
    "Keyword": "PostprocessingFunction",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5022)",
    "Name": "Mechanical Index",
    "Keyword": "MechanicalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5024)",
    "Name": "Bone Thermal Index",
    "Keyword": "BoneThermalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5026)",
    "Name": "Cranial Thermal Index",
    "Keyword": "CranialThermalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5027)",
    "Name": "Soft Tissue Thermal Index",
    "Keyword": "SoftTissueThermalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5028)",
    "Name": "Soft Tissue-focus Thermal Index",
    "Keyword": "SoftTissueFocusThermalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5029)",
    "Name": "Soft Tissue-surface Thermal Index",
    "Keyword": "SoftTissueSurfaceThermalIndex",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5030)",
    "Name": "Dynamic Range",
    "Keyword": "DynamicRange",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5040)",
    "Name": "Total Gain",
    "Keyword": "TotalGain",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5050)",
    "Name": "Depth of Scan Field",
    "Keyword": "DepthOfScanField",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5100)",
    "Name": "Patient Position",
    "Keyword": "PatientPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5101)",
    "Name": "View Position",
    "Keyword": "ViewPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5104)",
    "Name": "Projection Eponymous Name Code Sequence",
    "Keyword": "ProjectionEponymousNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5210)",
    "Name": "Image Transformation Matrix",
    "Keyword": "ImageTransformationMatrix",
    "VR": "DS",
    "VM": "6",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5212)",
    "Name": "Image Translation Vector",
    "Keyword": "ImageTranslationVector",
    "VR": "DS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6000)",
    "Name": "Sensitivity",
    "Keyword": "Sensitivity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6011)",
    "Name": "Sequence of Ultrasound Regions",
    "Keyword": "SequenceOfUltrasoundRegions",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6012)",
    "Name": "Region Spatial Format",
    "Keyword": "RegionSpatialFormat",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6014)",
    "Name": "Region Data Type",
    "Keyword": "RegionDataType",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6016)",
    "Name": "Region Flags",
    "Keyword": "RegionFlags",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6018)",
    "Name": "Region Location Min X0",
    "Keyword": "RegionLocationMinX0",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601A)",
    "Name": "Region Location Min Y0",
    "Keyword": "RegionLocationMinY0",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601C)",
    "Name": "Region Location Max X1",
    "Keyword": "RegionLocationMaxX1",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601E)",
    "Name": "Region Location Max Y1",
    "Keyword": "RegionLocationMaxY1",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6020)",
    "Name": "Reference Pixel X0",
    "Keyword": "ReferencePixelX0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6022)",
    "Name": "Reference Pixel Y0",
    "Keyword": "ReferencePixelY0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6024)",
    "Name": "Physical Units X Direction",
    "Keyword": "PhysicalUnitsXDirection",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6026)",
    "Name": "Physical Units Y Direction",
    "Keyword": "PhysicalUnitsYDirection",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6028)",
    "Name": "Reference Pixel Physical Value X",
    "Keyword": "ReferencePixelPhysicalValueX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602A)",
    "Name": "Reference Pixel Physical Value Y",
    "Keyword": "ReferencePixelPhysicalValueY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602C)",
    "Name": "Physical Delta X",
    "Keyword": "PhysicalDeltaX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602E)",
    "Name": "Physical Delta Y",
    "Keyword": "PhysicalDeltaY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6030)",
    "Name": "Transducer Frequency",
    "Keyword": "TransducerFrequency",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6031)",
    "Name": "Transducer Type",
    "Keyword": "TransducerType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6032)",
    "Name": "Pulse Repetition Frequency",
    "Keyword": "PulseRepetitionFrequency",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6034)",
    "Name": "Doppler Correction Angle",
    "Keyword": "DopplerCorrectionAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6036)",
    "Name": "Steering Angle",
    "Keyword": "SteeringAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6038)",
    "Name": "Doppler Sample Volume X Position (Retired)",
    "Keyword": "DopplerSampleVolumeXPositionRetired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6039)",
    "Name": "Doppler Sample Volume X Position",
    "Keyword": "DopplerSampleVolumeXPosition",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603A)",
    "Name": "Doppler Sample Volume Y Position (Retired)",
    "Keyword": "DopplerSampleVolumeYPositionRetired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603B)",
    "Name": "Doppler Sample Volume Y Position",
    "Keyword": "DopplerSampleVolumeYPosition",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603C)",
    "Name": "TM-Line Position X0 (Retired)",
    "Keyword": "TMLinePositionX0Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603D)",
    "Name": "TM-Line Position X0",
    "Keyword": "TMLinePositionX0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603E)",
    "Name": "TM-Line Position Y0 (Retired)",
    "Keyword": "TMLinePositionY0Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603F)",
    "Name": "TM-Line Position Y0",
    "Keyword": "TMLinePositionY0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6040)",
    "Name": "TM-Line Position X1 (Retired)",
    "Keyword": "TMLinePositionX1Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6041)",
    "Name": "TM-Line Position X1",
    "Keyword": "TMLinePositionX1",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6042)",
    "Name": "TM-Line Position Y1 (Retired)",
    "Keyword": "TMLinePositionY1Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6043)",
    "Name": "TM-Line Position Y1",
    "Keyword": "TMLinePositionY1",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6044)",
    "Name": "Pixel Component Organization",
    "Keyword": "PixelComponentOrganization",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6046)",
    "Name": "Pixel Component Mask",
    "Keyword": "PixelComponentMask",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6048)",
    "Name": "Pixel Component Range Start",
    "Keyword": "PixelComponentRangeStart",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604A)",
    "Name": "Pixel Component Range Stop",
    "Keyword": "PixelComponentRangeStop",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604C)",
    "Name": "Pixel Component Physical Units",
    "Keyword": "PixelComponentPhysicalUnits",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604E)",
    "Name": "Pixel Component Data Type",
    "Keyword": "PixelComponentDataType",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6050)",
    "Name": "Number of Table Break Points",
    "Keyword": "NumberOfTableBreakPoints",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6052)",
    "Name": "Table of X Break Points",
    "Keyword": "TableOfXBreakPoints",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6054)",
    "Name": "Table of Y Break Points",
    "Keyword": "TableOfYBreakPoints",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6056)",
    "Name": "Number of Table Entries",
    "Keyword": "NumberOfTableEntries",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6058)",
    "Name": "Table of Pixel Values",
    "Keyword": "TableOfPixelValues",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,605A)",
    "Name": "Table of Parameter Values",
    "Keyword": "TableOfParameterValues",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6060)",
    "Name": "R Wave Time Vector",
    "Keyword": "RWaveTimeVector",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7000)",
    "Name": "Detector Conditions Nominal Flag",
    "Keyword": "DetectorConditionsNominalFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7001)",
    "Name": "Detector Temperature",
    "Keyword": "DetectorTemperature",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7004)",
    "Name": "Detector Type",
    "Keyword": "DetectorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7005)",
    "Name": "Detector Configuration",
    "Keyword": "DetectorConfiguration",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7006)",
    "Name": "Detector Description",
    "Keyword": "DetectorDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7008)",
    "Name": "Detector Mode",
    "Keyword": "DetectorMode",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700A)",
    "Name": "Detector ID",
    "Keyword": "DetectorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700C)",
    "Name": "Date of Last Detector Calibration",
    "Keyword": "DateOfLastDetectorCalibration",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700E)",
    "Name": "Time of Last Detector Calibration",
    "Keyword": "TimeOfLastDetectorCalibration",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7010)",
    "Name": "Exposures on Detector Since Last Calibration",
    "Keyword": "ExposuresOnDetectorSinceLastCalibration",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7011)",
    "Name": "Exposures on Detector Since Manufactured",
    "Keyword": "ExposuresOnDetectorSinceManufactured",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7012)",
    "Name": "Detector Time Since Last Exposure",
    "Keyword": "DetectorTimeSinceLastExposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7014)",
    "Name": "Detector Active Time",
    "Keyword": "DetectorActiveTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7016)",
    "Name": "Detector Activation Offset From Exposure",
    "Keyword": "DetectorActivationOffsetFromExposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,701A)",
    "Name": "Detector Binning",
    "Keyword": "DetectorBinning",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7020)",
    "Name": "Detector Element Physical Size",
    "Keyword": "DetectorElementPhysicalSize",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7022)",
    "Name": "Detector Element Spacing",
    "Keyword": "DetectorElementSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7024)",
    "Name": "Detector Active Shape",
    "Keyword": "DetectorActiveShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7026)",
    "Name": "Detector Active Dimension(s)",
    "Keyword": "DetectorActiveDimensions",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7028)",
    "Name": "Detector Active Origin",
    "Keyword": "DetectorActiveOrigin",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,702A)",
    "Name": "Detector Manufacturer Name",
    "Keyword": "DetectorManufacturerName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,702B)",
    "Name": "Detector Manufacturer's Model Name",
    "Keyword": "DetectorManufacturerModelName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7030)",
    "Name": "Field of View Origin",
    "Keyword": "FieldOfViewOrigin",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7032)",
    "Name": "Field of View Rotation",
    "Keyword": "FieldOfViewRotation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7034)",
    "Name": "Field of View Horizontal Flip",
    "Keyword": "FieldOfViewHorizontalFlip",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7036)",
    "Name": "Pixel Data Area Origin Relative To FOV",
    "Keyword": "PixelDataAreaOriginRelativeToFOV",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7038)",
    "Name": "Pixel Data Area Rotation Angle Relative To FOV",
    "Keyword": "PixelDataAreaRotationAngleRelativeToFOV",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7040)",
    "Name": "Grid Absorbing Material",
    "Keyword": "GridAbsorbingMaterial",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7041)",
    "Name": "Grid Spacing Material",
    "Keyword": "GridSpacingMaterial",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7042)",
    "Name": "Grid Thickness",
    "Keyword": "GridThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7044)",
    "Name": "Grid Pitch",
    "Keyword": "GridPitch",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7046)",
    "Name": "Grid Aspect Ratio",
    "Keyword": "GridAspectRatio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7048)",
    "Name": "Grid Period",
    "Keyword": "GridPeriod",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,704C)",
    "Name": "Grid Focal Distance",
    "Keyword": "GridFocalDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7050)",
    "Name": "Filter Material",
    "Keyword": "FilterMaterial",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7052)",
    "Name": "Filter Thickness Minimum",
    "Keyword": "FilterThicknessMinimum",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7054)",
    "Name": "Filter Thickness Maximum",
    "Keyword": "FilterThicknessMaximum",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7056)",
    "Name": "Filter Beam Path Length Minimum",
    "Keyword": "FilterBeamPathLengthMinimum",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7058)",
    "Name": "Filter Beam Path Length Maximum",
    "Keyword": "FilterBeamPathLengthMaximum",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7060)",
    "Name": "Exposure Control Mode",
    "Keyword": "ExposureControlMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7062)",
    "Name": "Exposure Control Mode Description",
    "Keyword": "ExposureControlModeDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7064)",
    "Name": "Exposure Status",
    "Keyword": "ExposureStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7065)",
    "Name": "Phototimer Setting",
    "Keyword": "PhototimerSetting",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,8150)",
    "Name": "Exposure Time in µS",
    "Keyword": "ExposureTimeInuS",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,8151)",
    "Name": "X-Ray Tube Current in µA",
    "Keyword": "XRayTubeCurrentInuA",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9004)",
    "Name": "Content Qualification",
    "Keyword": "ContentQualification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9005)",
    "Name": "Pulse Sequence Name",
    "Keyword": "PulseSequenceName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9006)",
    "Name": "MR Imaging Modifier Sequence",
    "Keyword": "MRImagingModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9008)",
    "Name": "Echo Pulse Sequence",
    "Keyword": "EchoPulseSequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9009)",
    "Name": "Inversion Recovery",
    "Keyword": "InversionRecovery",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9010)",
    "Name": "Flow Compensation",
    "Keyword": "FlowCompensation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9011)",
    "Name": "Multiple Spin Echo",
    "Keyword": "MultipleSpinEcho",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9012)",
    "Name": "Multi-planar Excitation",
    "Keyword": "MultiPlanarExcitation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9014)",
    "Name": "Phase Contrast",
    "Keyword": "PhaseContrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9015)",
    "Name": "Time of Flight Contrast",
    "Keyword": "TimeOfFlightContrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9016)",
    "Name": "Spoiling",
    "Keyword": "Spoiling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9017)",
    "Name": "Steady State Pulse Sequence",
    "Keyword": "SteadyStatePulseSequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9018)",
    "Name": "Echo Planar Pulse Sequence",
    "Keyword": "EchoPlanarPulseSequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9019)",
    "Name": "Tag Angle First Axis",
    "Keyword": "TagAngleFirstAxis",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9020)",
    "Name": "Magnetization Transfer",
    "Keyword": "MagnetizationTransfer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9021)",
    "Name": "T2 Preparation",
    "Keyword": "T2Preparation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9022)",
    "Name": "Blood Signal Nulling",
    "Keyword": "BloodSignalNulling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9024)",
    "Name": "Saturation Recovery",
    "Keyword": "SaturationRecovery",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9025)",
    "Name": "Spectrally Selected Suppression",
    "Keyword": "SpectrallySelectedSuppression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9026)",
    "Name": "Spectrally Selected Excitation",
    "Keyword": "SpectrallySelectedExcitation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9027)",
    "Name": "Spatial Pre-saturation",
    "Keyword": "SpatialPresaturation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9028)",
    "Name": "Tagging",
    "Keyword": "Tagging",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9029)",
    "Name": "Oversampling Phase",
    "Keyword": "OversamplingPhase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9030)",
    "Name": "Tag Spacing First Dimension",
    "Keyword": "TagSpacingFirstDimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9032)",
    "Name": "Geometry of k-Space Traversal",
    "Keyword": "GeometryOfKSpaceTraversal",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9033)",
    "Name": "Segmented k-Space Traversal",
    "Keyword": "SegmentedKSpaceTraversal",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9034)",
    "Name": "Rectilinear Phase Encode Reordering",
    "Keyword": "RectilinearPhaseEncodeReordering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9035)",
    "Name": "Tag Thickness",
    "Keyword": "TagThickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9036)",
    "Name": "Partial Fourier Direction",
    "Keyword": "PartialFourierDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9037)",
    "Name": "Cardiac Synchronization Technique",
    "Keyword": "CardiacSynchronizationTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9041)",
    "Name": "Receive Coil Manufacturer Name",
    "Keyword": "ReceiveCoilManufacturerName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9042)",
    "Name": "MR Receive Coil Sequence",
    "Keyword": "MRReceiveCoilSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9043)",
    "Name": "Receive Coil Type",
    "Keyword": "ReceiveCoilType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9044)",
    "Name": "Quadrature Receive Coil",
    "Keyword": "QuadratureReceiveCoil",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9045)",
    "Name": "Multi-Coil Definition Sequence",
    "Keyword": "MultiCoilDefinitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9046)",
    "Name": "Multi-Coil Configuration",
    "Keyword": "MultiCoilConfiguration",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9047)",
    "Name": "Multi-Coil Element Name",
    "Keyword": "MultiCoilElementName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9048)",
    "Name": "Multi-Coil Element Used",
    "Keyword": "MultiCoilElementUsed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9049)",
    "Name": "MR Transmit Coil Sequence",
    "Keyword": "MRTransmitCoilSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9050)",
    "Name": "Transmit Coil Manufacturer Name",
    "Keyword": "TransmitCoilManufacturerName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9051)",
    "Name": "Transmit Coil Type",
    "Keyword": "TransmitCoilType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9052)",
    "Name": "Spectral Width",
    "Keyword": "SpectralWidth",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9053)",
    "Name": "Chemical Shift Reference",
    "Keyword": "ChemicalShiftReference",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9054)",
    "Name": "Volume Localization Technique",
    "Keyword": "VolumeLocalizationTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9058)",
    "Name": "MR Acquisition Frequency Encoding Steps",
    "Keyword": "MRAcquisitionFrequencyEncodingSteps",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9059)",
    "Name": "De-coupling",
    "Keyword": "Decoupling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9060)",
    "Name": "De-coupled Nucleus",
    "Keyword": "DecoupledNucleus",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9061)",
    "Name": "De-coupling Frequency",
    "Keyword": "DecouplingFrequency",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9062)",
    "Name": "De-coupling Method",
    "Keyword": "DecouplingMethod",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9063)",
    "Name": "De-coupling Chemical Shift Reference",
    "Keyword": "DecouplingChemicalShiftReference",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9064)",
    "Name": "k-space Filtering",
    "Keyword": "KSpaceFiltering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9065)",
    "Name": "Time Domain Filtering",
    "Keyword": "TimeDomainFiltering",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9066)",
    "Name": "Number of Zero Fills",
    "Keyword": "NumberOfZeroFills",
    "VR": "US",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9067)",
    "Name": "Baseline Correction",
    "Keyword": "BaselineCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9069)",
    "Name": "Parallel Reduction Factor In-plane",
    "Keyword": "ParallelReductionFactorInPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9070)",
    "Name": "Cardiac R-R Interval Specified",
    "Keyword": "CardiacRRIntervalSpecified",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9073)",
    "Name": "Acquisition Duration",
    "Keyword": "AcquisitionDuration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9074)",
    "Name": "Frame Acquisition DateTime",
    "Keyword": "FrameAcquisitionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9075)",
    "Name": "Diffusion Directionality",
    "Keyword": "DiffusionDirectionality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9076)",
    "Name": "Diffusion Gradient Direction Sequence",
    "Keyword": "DiffusionGradientDirectionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9077)",
    "Name": "Parallel Acquisition",
    "Keyword": "ParallelAcquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9078)",
    "Name": "Parallel Acquisition Technique",
    "Keyword": "ParallelAcquisitionTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9079)",
    "Name": "Inversion Times",
    "Keyword": "InversionTimes",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9080)",
    "Name": "Metabolite Map Description",
    "Keyword": "MetaboliteMapDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9081)",
    "Name": "Partial Fourier",
    "Keyword": "PartialFourier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9082)",
    "Name": "Effective Echo Time",
    "Keyword": "EffectiveEchoTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9083)",
    "Name": "Metabolite Map Code Sequence",
    "Keyword": "MetaboliteMapCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9084)",
    "Name": "Chemical Shift Sequence",
    "Keyword": "ChemicalShiftSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9085)",
    "Name": "Cardiac Signal Source",
    "Keyword": "CardiacSignalSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9087)",
    "Name": "Diffusion b-value",
    "Keyword": "DiffusionBValue",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9089)",
    "Name": "Diffusion Gradient Orientation",
    "Keyword": "DiffusionGradientOrientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9090)",
    "Name": "Velocity Encoding Direction",
    "Keyword": "VelocityEncodingDirection",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9091)",
    "Name": "Velocity Encoding Minimum Value",
    "Keyword": "VelocityEncodingMinimumValue",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9092)",
    "Name": "Velocity Encoding Acquisition Sequence",
    "Keyword": "VelocityEncodingAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9093)",
    "Name": "Number of k-Space Trajectories",
    "Keyword": "NumberOfKSpaceTrajectories",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9094)",
    "Name": "Coverage of k-Space",
    "Keyword": "CoverageOfKSpace",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9095)",
    "Name": "Spectroscopy Acquisition Phase Rows",
    "Keyword": "SpectroscopyAcquisitionPhaseRows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9096)",
    "Name": "Parallel Reduction Factor In-plane (Retired)",
    "Keyword": "ParallelReductionFactorInPlaneRetired",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9098)",
    "Name": "Transmitter Frequency",
    "Keyword": "TransmitterFrequency",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9100)",
    "Name": "Resonant Nucleus",
    "Keyword": "ResonantNucleus",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9101)",
    "Name": "Frequency Correction",
    "Keyword": "FrequencyCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9103)",
    "Name": "MR Spectroscopy FOV/Geometry Sequence",
    "Keyword": "MRSpectroscopyFOVGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9104)",
    "Name": "Slab Thickness",
    "Keyword": "SlabThickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9105)",
    "Name": "Slab Orientation",
    "Keyword": "SlabOrientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9106)",
    "Name": "Mid Slab Position",
    "Keyword": "MidSlabPosition",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9107)",
    "Name": "MR Spatial Saturation Sequence",
    "Keyword": "MRSpatialSaturationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9112)",
    "Name": "MR Timing and Related Parameters Sequence",
    "Keyword": "MRTimingAndRelatedParametersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9114)",
    "Name": "MR Echo Sequence",
    "Keyword": "MREchoSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9115)",
    "Name": "MR Modifier Sequence",
    "Keyword": "MRModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9117)",
    "Name": "MR Diffusion Sequence",
    "Keyword": "MRDiffusionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9118)",
    "Name": "Cardiac Synchronization Sequence",
    "Keyword": "CardiacSynchronizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9119)",
    "Name": "MR Averages Sequence",
    "Keyword": "MRAveragesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9125)",
    "Name": "MR FOV/Geometry Sequence",
    "Keyword": "MRFOVGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9126)",
    "Name": "Volume Localization Sequence",
    "Keyword": "VolumeLocalizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9127)",
    "Name": "Spectroscopy Acquisition Data Columns",
    "Keyword": "SpectroscopyAcquisitionDataColumns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9147)",
    "Name": "Diffusion Anisotropy Type",
    "Keyword": "DiffusionAnisotropyType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9151)",
    "Name": "Frame Reference DateTime",
    "Keyword": "FrameReferenceDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9152)",
    "Name": "MR Metabolite Map Sequence",
    "Keyword": "MRMetaboliteMapSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9155)",
    "Name": "Parallel Reduction Factor out-of-plane",
    "Keyword": "ParallelReductionFactorOutOfPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9159)",
    "Name": "Spectroscopy Acquisition Out-of-plane Phase Steps",
    "Keyword": "SpectroscopyAcquisitionOutOfPlanePhaseSteps",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9166)",
    "Name": "Bulk Motion Status",
    "Keyword": "BulkMotionStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9168)",
    "Name": "Parallel Reduction Factor Second In-plane",
    "Keyword": "ParallelReductionFactorSecondInPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9169)",
    "Name": "Cardiac Beat Rejection Technique",
    "Keyword": "CardiacBeatRejectionTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9170)",
    "Name": "Respiratory Motion Compensation Technique",
    "Keyword": "RespiratoryMotionCompensationTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9171)",
    "Name": "Respiratory Signal Source",
    "Keyword": "RespiratorySignalSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9172)",
    "Name": "Bulk Motion Compensation Technique",
    "Keyword": "BulkMotionCompensationTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9173)",
    "Name": "Bulk Motion Signal Source",
    "Keyword": "BulkMotionSignalSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9174)",
    "Name": "Applicable Safety Standard Agency",
    "Keyword": "ApplicableSafetyStandardAgency",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9175)",
    "Name": "Applicable Safety Standard Description",
    "Keyword": "ApplicableSafetyStandardDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9176)",
    "Name": "Operating Mode Sequence",
    "Keyword": "OperatingModeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9177)",
    "Name": "Operating Mode Type",
    "Keyword": "OperatingModeType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9178)",
    "Name": "Operating Mode",
    "Keyword": "OperatingMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9179)",
    "Name": "Specific Absorption Rate Definition",
    "Keyword": "SpecificAbsorptionRateDefinition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9180)",
    "Name": "Gradient Output Type",
    "Keyword": "GradientOutputType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9181)",
    "Name": "Specific Absorption Rate Value",
    "Keyword": "SpecificAbsorptionRateValue",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9182)",
    "Name": "Gradient Output",
    "Keyword": "GradientOutput",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9183)",
    "Name": "Flow Compensation Direction",
    "Keyword": "FlowCompensationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9184)",
    "Name": "Tagging Delay",
    "Keyword": "TaggingDelay",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9185)",
    "Name": "Respiratory Motion Compensation Technique Description",
    "Keyword": "RespiratoryMotionCompensationTechniqueDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9186)",
    "Name": "Respiratory Signal Source ID",
    "Keyword": "RespiratorySignalSourceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9195)",
    "Name": "Chemical Shift Minimum Integration Limit in Hz",
    "Keyword": "ChemicalShiftMinimumIntegrationLimitInHz",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9196)",
    "Name": "Chemical Shift Maximum Integration Limit in Hz",
    "Keyword": "ChemicalShiftMaximumIntegrationLimitInHz",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9197)",
    "Name": "MR Velocity Encoding Sequence",
    "Keyword": "MRVelocityEncodingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9198)",
    "Name": "First Order Phase Correction",
    "Keyword": "FirstOrderPhaseCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9199)",
    "Name": "Water Referenced Phase Correction",
    "Keyword": "WaterReferencedPhaseCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9200)",
    "Name": "MR Spectroscopy Acquisition Type",
    "Keyword": "MRSpectroscopyAcquisitionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9214)",
    "Name": "Respiratory Cycle Position",
    "Keyword": "RespiratoryCyclePosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9217)",
    "Name": "Velocity Encoding Maximum Value",
    "Keyword": "VelocityEncodingMaximumValue",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9218)",
    "Name": "Tag Spacing Second Dimension",
    "Keyword": "TagSpacingSecondDimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9219)",
    "Name": "Tag Angle Second Axis",
    "Keyword": "TagAngleSecondAxis",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9220)",
    "Name": "Frame Acquisition Duration",
    "Keyword": "FrameAcquisitionDuration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9226)",
    "Name": "MR Image Frame Type Sequence",
    "Keyword": "MRImageFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9227)",
    "Name": "MR Spectroscopy Frame Type Sequence",
    "Keyword": "MRSpectroscopyFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9231)",
    "Name": "MR Acquisition Phase Encoding Steps in-plane",
    "Keyword": "MRAcquisitionPhaseEncodingStepsInPlane",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9232)",
    "Name": "MR Acquisition Phase Encoding Steps out-of-plane",
    "Keyword": "MRAcquisitionPhaseEncodingStepsOutOfPlane",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9234)",
    "Name": "Spectroscopy Acquisition Phase Columns",
    "Keyword": "SpectroscopyAcquisitionPhaseColumns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9236)",
    "Name": "Cardiac Cycle Position",
    "Keyword": "CardiacCyclePosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9239)",
    "Name": "Specific Absorption Rate Sequence",
    "Keyword": "SpecificAbsorptionRateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9240)",
    "Name": "RF Echo Train Length",
    "Keyword": "RFEchoTrainLength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9241)",
    "Name": "Gradient Echo Train Length",
    "Keyword": "GradientEchoTrainLength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9250)",
    "Name": "Arterial Spin Labeling Contrast",
    "Keyword": "ArterialSpinLabelingContrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9251)",
    "Name": "MR Arterial Spin Labeling Sequence",
    "Keyword": "MRArterialSpinLabelingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9252)",
    "Name": "ASL Technique Description",
    "Keyword": "ASLTechniqueDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9253)",
    "Name": "ASL Slab Number",
    "Keyword": "ASLSlabNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9254)",
    "Name": "ASL Slab Thickness",
    "Keyword": "ASLSlabThickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9255)",
    "Name": "ASL Slab Orientation",
    "Keyword": "ASLSlabOrientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9256)",
    "Name": "ASL Mid Slab Position",
    "Keyword": "ASLMidSlabPosition",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9257)",
    "Name": "ASL Context",
    "Keyword": "ASLContext",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9258)",
    "Name": "ASL Pulse Train Duration",
    "Keyword": "ASLPulseTrainDuration",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9259)",
    "Name": "ASL Crusher Flag",
    "Keyword": "ASLCrusherFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925A)",
    "Name": "ASL Crusher Flow Limit",
    "Keyword": "ASLCrusherFlowLimit",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925B)",
    "Name": "ASL Crusher Description",
    "Keyword": "ASLCrusherDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925C)",
    "Name": "ASL Bolus Cut-off Flag",
    "Keyword": "ASLBolusCutoffFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925D)",
    "Name": "ASL Bolus Cut-off Timing Sequence",
    "Keyword": "ASLBolusCutoffTimingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925E)",
    "Name": "ASL Bolus Cut-off Technique",
    "Keyword": "ASLBolusCutoffTechnique",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925F)",
    "Name": "ASL Bolus Cut-off Delay Time",
    "Keyword": "ASLBolusCutoffDelayTime",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9260)",
    "Name": "ASL Slab Sequence",
    "Keyword": "ASLSlabSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9295)",
    "Name": "Chemical Shift Minimum Integration Limit in ppm",
    "Keyword": "ChemicalShiftMinimumIntegrationLimitInppm",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9296)",
    "Name": "Chemical Shift Maximum Integration Limit in ppm",
    "Keyword": "ChemicalShiftMaximumIntegrationLimitInppm",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9301)",
    "Name": "CT Acquisition Type Sequence",
    "Keyword": "CTAcquisitionTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9302)",
    "Name": "Acquisition Type",
    "Keyword": "AcquisitionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9303)",
    "Name": "Tube Angle",
    "Keyword": "TubeAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9304)",
    "Name": "CT Acquisition Details Sequence",
    "Keyword": "CTAcquisitionDetailsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9305)",
    "Name": "Revolution Time",
    "Keyword": "RevolutionTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9306)",
    "Name": "Single Collimation Width",
    "Keyword": "SingleCollimationWidth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9307)",
    "Name": "Total Collimation Width",
    "Keyword": "TotalCollimationWidth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9308)",
    "Name": "CT Table Dynamics Sequence",
    "Keyword": "CTTableDynamicsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9309)",
    "Name": "Table Speed",
    "Keyword": "TableSpeed",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9310)",
    "Name": "Table Feed per Rotation",
    "Keyword": "TableFeedPerRotation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9311)",
    "Name": "Spiral Pitch Factor",
    "Keyword": "SpiralPitchFactor",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9312)",
    "Name": "CT Geometry Sequence",
    "Keyword": "CTGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9313)",
    "Name": "Data Collection Center (Patient)",
    "Keyword": "DataCollectionCenterPatient",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9314)",
    "Name": "CT Reconstruction Sequence",
    "Keyword": "CTReconstructionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9315)",
    "Name": "Reconstruction Algorithm",
    "Keyword": "ReconstructionAlgorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9316)",
    "Name": "Convolution Kernel Group",
    "Keyword": "ConvolutionKernelGroup",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9317)",
    "Name": "Reconstruction Field of View",
    "Keyword": "ReconstructionFieldOfView",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9318)",
    "Name": "Reconstruction Target Center (Patient)",
    "Keyword": "ReconstructionTargetCenterPatient",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9319)",
    "Name": "Reconstruction Angle",
    "Keyword": "ReconstructionAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9320)",
    "Name": "Image Filter",
    "Keyword": "ImageFilter",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9321)",
    "Name": "CT Exposure Sequence",
    "Keyword": "CTExposureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9322)",
    "Name": "Reconstruction Pixel Spacing",
    "Keyword": "ReconstructionPixelSpacing",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9323)",
    "Name": "Exposure Modulation Type",
    "Keyword": "ExposureModulationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9324)",
    "Name": "Estimated Dose Saving",
    "Keyword": "EstimatedDoseSaving",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9325)",
    "Name": "CT X-Ray Details Sequence",
    "Keyword": "CTXRayDetailsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9326)",
    "Name": "CT Position Sequence",
    "Keyword": "CTPositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9327)",
    "Name": "Table Position",
    "Keyword": "TablePosition",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9328)",
    "Name": "Exposure Time in ms",
    "Keyword": "ExposureTimeInms",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9329)",
    "Name": "CT Image Frame Type Sequence",
    "Keyword": "CTImageFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9330)",
    "Name": "X-Ray Tube Current in mA",
    "Keyword": "XRayTubeCurrentInmA",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9332)",
    "Name": "Exposure in mAs",
    "Keyword": "ExposureInmAs",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9333)",
    "Name": "Constant Volume Flag",
    "Keyword": "ConstantVolumeFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9334)",
    "Name": "Fluoroscopy Flag",
    "Keyword": "FluoroscopyFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9335)",
    "Name": "Distance Source to Data Collection Center",
    "Keyword": "DistanceSourceToDataCollectionCenter",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9337)",
    "Name": "Contrast/Bolus Agent Number",
    "Keyword": "ContrastBolusAgentNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9338)",
    "Name": "Contrast/Bolus Ingredient Code Sequence",
    "Keyword": "ContrastBolusIngredientCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9340)",
    "Name": "Contrast Administration Profile Sequence",
    "Keyword": "ContrastAdministrationProfileSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9341)",
    "Name": "Contrast/Bolus Usage Sequence",
    "Keyword": "ContrastBolusUsageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9342)",
    "Name": "Contrast/Bolus Agent Administered",
    "Keyword": "ContrastBolusAgentAdministered",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9343)",
    "Name": "Contrast/Bolus Agent Detected",
    "Keyword": "ContrastBolusAgentDetected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9344)",
    "Name": "Contrast/Bolus Agent Phase",
    "Keyword": "ContrastBolusAgentPhase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9345)",
    "Name": "CTDIvol",
    "Keyword": "CTDIvol",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9346)",
    "Name": "CTDI Phantom Type Code Sequence",
    "Keyword": "CTDIPhantomTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9351)",
    "Name": "Calcium Scoring Mass Factor Patient",
    "Keyword": "CalciumScoringMassFactorPatient",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9352)",
    "Name": "Calcium Scoring Mass Factor Device",
    "Keyword": "CalciumScoringMassFactorDevice",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9353)",
    "Name": "Energy Weighting Factor",
    "Keyword": "EnergyWeightingFactor",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9360)",
    "Name": "CT Additional X-Ray Source Sequence",
    "Keyword": "CTAdditionalXRaySourceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9401)",
    "Name": "Projection Pixel Calibration Sequence",
    "Keyword": "ProjectionPixelCalibrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9402)",
    "Name": "Distance Source to Isocenter",
    "Keyword": "DistanceSourceToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9403)",
    "Name": "Distance Object to Table Top",
    "Keyword": "DistanceObjectToTableTop",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9404)",
    "Name": "Object Pixel Spacing in Center of Beam",
    "Keyword": "ObjectPixelSpacingInCenterOfBeam",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9405)",
    "Name": "Positioner Position Sequence",
    "Keyword": "PositionerPositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9406)",
    "Name": "Table Position Sequence",
    "Keyword": "TablePositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9407)",
    "Name": "Collimator Shape Sequence",
    "Keyword": "CollimatorShapeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9410)",
    "Name": "Planes in Acquisition",
    "Keyword": "PlanesInAcquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9412)",
    "Name": "XA/XRF Frame Characteristics Sequence",
    "Keyword": "XAXRFFrameCharacteristicsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9417)",
    "Name": "Frame Acquisition Sequence",
    "Keyword": "FrameAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9420)",
    "Name": "X-Ray Receptor Type",
    "Keyword": "XRayReceptorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9423)",
    "Name": "Acquisition Protocol Name",
    "Keyword": "AcquisitionProtocolName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9424)",
    "Name": "Acquisition Protocol Description",
    "Keyword": "AcquisitionProtocolDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9425)",
    "Name": "Contrast/Bolus Ingredient Opaque",
    "Keyword": "ContrastBolusIngredientOpaque",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9426)",
    "Name": "Distance Receptor Plane to Detector Housing",
    "Keyword": "DistanceReceptorPlaneToDetectorHousing",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9427)",
    "Name": "Intensifier Active Shape",
    "Keyword": "IntensifierActiveShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9428)",
    "Name": "Intensifier Active Dimension(s)",
    "Keyword": "IntensifierActiveDimensions",
    "VR": "FL",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9429)",
    "Name": "Physical Detector Size",
    "Keyword": "PhysicalDetectorSize",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9430)",
    "Name": "Position of Isocenter Projection",
    "Keyword": "PositionOfIsocenterProjection",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9432)",
    "Name": "Field of View Sequence",
    "Keyword": "FieldOfViewSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9433)",
    "Name": "Field of View Description",
    "Keyword": "FieldOfViewDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9434)",
    "Name": "Exposure Control Sensing Regions Sequence",
    "Keyword": "ExposureControlSensingRegionsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9435)",
    "Name": "Exposure Control Sensing Region Shape",
    "Keyword": "ExposureControlSensingRegionShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9436)",
    "Name": "Exposure Control Sensing Region Left Vertical Edge",
    "Keyword": "ExposureControlSensingRegionLeftVerticalEdge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9437)",
    "Name": "Exposure Control Sensing Region Right Vertical Edge",
    "Keyword": "ExposureControlSensingRegionRightVerticalEdge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9438)",
    "Name": "Exposure Control Sensing Region Upper Horizontal Edge",
    "Keyword": "ExposureControlSensingRegionUpperHorizontalEdge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9439)",
    "Name": "Exposure Control Sensing Region Lower Horizontal Edge",
    "Keyword": "ExposureControlSensingRegionLowerHorizontalEdge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9440)",
    "Name": "Center of Circular Exposure Control Sensing Region",
    "Keyword": "CenterOfCircularExposureControlSensingRegion",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9441)",
    "Name": "Radius of Circular Exposure Control Sensing Region",
    "Keyword": "RadiusOfCircularExposureControlSensingRegion",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9442)",
    "Name": "Vertices of the Polygonal Exposure Control Sensing Region",
    "Keyword": "VerticesOfThePolygonalExposureControlSensingRegion",
    "VR": "SS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9445)",
    "Name": "",
    "Keyword": "",
    "VR": "",
    "VM": "",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9447)",
    "Name": "Column Angulation (Patient)",
    "Keyword": "ColumnAngulationPatient",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9449)",
    "Name": "Beam Angle",
    "Keyword": "BeamAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9451)",
    "Name": "Frame Detector Parameters Sequence",
    "Keyword": "FrameDetectorParametersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9452)",
    "Name": "Calculated Anatomy Thickness",
    "Keyword": "CalculatedAnatomyThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9455)",
    "Name": "Calibration Sequence",
    "Keyword": "CalibrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9456)",
    "Name": "Object Thickness Sequence",
    "Keyword": "ObjectThicknessSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9457)",
    "Name": "Plane Identification",
    "Keyword": "PlaneIdentification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9461)",
    "Name": "Field of View Dimension(s) in Float",
    "Keyword": "FieldOfViewDimensionsInFloat",
    "VR": "FL",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9462)",
    "Name": "Isocenter Reference System Sequence",
    "Keyword": "IsocenterReferenceSystemSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9463)",
    "Name": "Positioner Isocenter Primary Angle",
    "Keyword": "PositionerIsocenterPrimaryAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9464)",
    "Name": "Positioner Isocenter Secondary Angle",
    "Keyword": "PositionerIsocenterSecondaryAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9465)",
    "Name": "Positioner Isocenter Detector Rotation Angle",
    "Keyword": "PositionerIsocenterDetectorRotationAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9466)",
    "Name": "Table X Position to Isocenter",
    "Keyword": "TableXPositionToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9467)",
    "Name": "Table Y Position to Isocenter",
    "Keyword": "TableYPositionToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9468)",
    "Name": "Table Z Position to Isocenter",
    "Keyword": "TableZPositionToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9469)",
    "Name": "Table Horizontal Rotation Angle",
    "Keyword": "TableHorizontalRotationAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9470)",
    "Name": "Table Head Tilt Angle",
    "Keyword": "TableHeadTiltAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9471)",
    "Name": "Table Cradle Tilt Angle",
    "Keyword": "TableCradleTiltAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9472)",
    "Name": "Frame Display Shutter Sequence",
    "Keyword": "FrameDisplayShutterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9473)",
    "Name": "Acquired Image Area Dose Product",
    "Keyword": "AcquiredImageAreaDoseProduct",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9474)",
    "Name": "C-arm Positioner Tabletop Relationship",
    "Keyword": "CArmPositionerTabletopRelationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9476)",
    "Name": "X-Ray Geometry Sequence",
    "Keyword": "XRayGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9477)",
    "Name": "Irradiation Event Identification Sequence",
    "Keyword": "IrradiationEventIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9504)",
    "Name": "X-Ray 3D Frame Type Sequence",
    "Keyword": "XRay3DFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9506)",
    "Name": "Contributing Sources Sequence",
    "Keyword": "ContributingSourcesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9507)",
    "Name": "X-Ray 3D Acquisition Sequence",
    "Keyword": "XRay3DAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9508)",
    "Name": "Primary Positioner Scan Arc",
    "Keyword": "PrimaryPositionerScanArc",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9509)",
    "Name": "Secondary Positioner Scan Arc",
    "Keyword": "SecondaryPositionerScanArc",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9510)",
    "Name": "Primary Positioner Scan Start Angle",
    "Keyword": "PrimaryPositionerScanStartAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9511)",
    "Name": "Secondary Positioner Scan Start Angle",
    "Keyword": "SecondaryPositionerScanStartAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9514)",
    "Name": "Primary Positioner Increment",
    "Keyword": "PrimaryPositionerIncrement",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9515)",
    "Name": "Secondary Positioner Increment",
    "Keyword": "SecondaryPositionerIncrement",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9516)",
    "Name": "Start Acquisition DateTime",
    "Keyword": "StartAcquisitionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9517)",
    "Name": "End Acquisition DateTime",
    "Keyword": "EndAcquisitionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9524)",
    "Name": "Application Name",
    "Keyword": "ApplicationName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9525)",
    "Name": "Application Version",
    "Keyword": "ApplicationVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9526)",
    "Name": "Application Manufacturer",
    "Keyword": "ApplicationManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9527)",
    "Name": "Algorithm Type",
    "Keyword": "AlgorithmType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9528)",
    "Name": "Algorithm Description",
    "Keyword": "AlgorithmDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9530)",
    "Name": "X-Ray 3D Reconstruction Sequence",
    "Keyword": "XRay3DReconstructionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9531)",
    "Name": "Reconstruction Description",
    "Keyword": "ReconstructionDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9538)",
    "Name": "Per Projection Acquisition Sequence",
    "Keyword": "PerProjectionAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9601)",
    "Name": "Diffusion b-matrix Sequence",
    "Keyword": "DiffusionBMatrixSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9602)",
    "Name": "Diffusion b-value XX",
    "Keyword": "DiffusionBValueXX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9603)",
    "Name": "Diffusion b-value XY",
    "Keyword": "DiffusionBValueXY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9604)",
    "Name": "Diffusion b-value XZ",
    "Keyword": "DiffusionBValueXZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9605)",
    "Name": "Diffusion b-value YY",
    "Keyword": "DiffusionBValueYY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9606)",
    "Name": "Diffusion b-value YZ",
    "Keyword": "DiffusionBValueYZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9607)",
    "Name": "Diffusion b-value ZZ",
    "Keyword": "DiffusionBValueZZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9701)",
    "Name": "Decay Correction DateTime",
    "Keyword": "DecayCorrectionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9715)",
    "Name": "Start Density Threshold",
    "Keyword": "StartDensityThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9716)",
    "Name": "Start Relative Density Difference Threshold",
    "Keyword": "StartRelativeDensityDifferenceThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9717)",
    "Name": "Start Cardiac Trigger Count Threshold",
    "Keyword": "StartCardiacTriggerCountThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9718)",
    "Name": "Start Respiratory Trigger Count Threshold",
    "Keyword": "StartRespiratoryTriggerCountThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9719)",
    "Name": "Termination Counts Threshold",
    "Keyword": "TerminationCountsThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9720)",
    "Name": "Termination Density Threshold",
    "Keyword": "TerminationDensityThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9721)",
    "Name": "Termination Relative Density Threshold",
    "Keyword": "TerminationRelativeDensityThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9722)",
    "Name": "Termination Time Threshold",
    "Keyword": "TerminationTimeThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9723)",
    "Name": "Termination Cardiac Trigger Count Threshold",
    "Keyword": "TerminationCardiacTriggerCountThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9724)",
    "Name": "Termination Respiratory Trigger Count Threshold",
    "Keyword": "TerminationRespiratoryTriggerCountThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9725)",
    "Name": "Detector Geometry",
    "Keyword": "DetectorGeometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9726)",
    "Name": "Transverse Detector Separation",
    "Keyword": "TransverseDetectorSeparation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9727)",
    "Name": "Axial Detector Dimension",
    "Keyword": "AxialDetectorDimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9729)",
    "Name": "Radiopharmaceutical Agent Number",
    "Keyword": "RadiopharmaceuticalAgentNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9732)",
    "Name": "PET Frame Acquisition Sequence",
    "Keyword": "PETFrameAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9733)",
    "Name": "PET Detector Motion Details Sequence",
    "Keyword": "PETDetectorMotionDetailsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9734)",
    "Name": "PET Table Dynamics Sequence",
    "Keyword": "PETTableDynamicsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9735)",
    "Name": "PET Position Sequence",
    "Keyword": "PETPositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9736)",
    "Name": "PET Frame Correction Factors Sequence",
    "Keyword": "PETFrameCorrectionFactorsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9737)",
    "Name": "Radiopharmaceutical Usage Sequence",
    "Keyword": "RadiopharmaceuticalUsageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9738)",
    "Name": "Attenuation Correction Source",
    "Keyword": "AttenuationCorrectionSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9739)",
    "Name": "Number of Iterations",
    "Keyword": "NumberOfIterations",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9740)",
    "Name": "Number of Subsets",
    "Keyword": "NumberOfSubsets",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9749)",
    "Name": "PET Reconstruction Sequence",
    "Keyword": "PETReconstructionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9751)",
    "Name": "PET Frame Type Sequence",
    "Keyword": "PETFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9755)",
    "Name": "Time of Flight Information Used",
    "Keyword": "TimeOfFlightInformationUsed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9756)",
    "Name": "Reconstruction Type",
    "Keyword": "ReconstructionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9758)",
    "Name": "Decay Corrected",
    "Keyword": "DecayCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9759)",
    "Name": "Attenuation Corrected",
    "Keyword": "AttenuationCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9760)",
    "Name": "Scatter Corrected",
    "Keyword": "ScatterCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9761)",
    "Name": "Dead Time Corrected",
    "Keyword": "DeadTimeCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9762)",
    "Name": "Gantry Motion Corrected",
    "Keyword": "GantryMotionCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9763)",
    "Name": "Patient Motion Corrected",
    "Keyword": "PatientMotionCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9764)",
    "Name": "Count Loss Normalization Corrected",
    "Keyword": "CountLossNormalizationCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9765)",
    "Name": "Randoms Corrected",
    "Keyword": "RandomsCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9766)",
    "Name": "Non-uniform Radial Sampling Corrected",
    "Keyword": "NonUniformRadialSamplingCorrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9767)",
    "Name": "Sensitivity Calibrated",
    "Keyword": "SensitivityCalibrated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9768)",
    "Name": "Detector Normalization Correction",
    "Keyword": "DetectorNormalizationCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9769)",
    "Name": "Iterative Reconstruction Method",
    "Keyword": "IterativeReconstructionMethod",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9770)",
    "Name": "Attenuation Correction Temporal Relationship",
    "Keyword": "AttenuationCorrectionTemporalRelationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9771)",
    "Name": "Patient Physiological State Sequence",
    "Keyword": "PatientPhysiologicalStateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9772)",
    "Name": "Patient Physiological State Code Sequence",
    "Keyword": "PatientPhysiologicalStateCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9801)",
    "Name": "Depth(s) of Focus",
    "Keyword": "DepthsOfFocus",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9803)",
    "Name": "Excluded Intervals Sequence",
    "Keyword": "ExcludedIntervalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9804)",
    "Name": "Exclusion Start DateTime",
    "Keyword": "ExclusionStartDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9805)",
    "Name": "Exclusion Duration",
    "Keyword": "ExclusionDuration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9806)",
    "Name": "US Image Description Sequence",
    "Keyword": "USImageDescriptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9807)",
    "Name": "Image Data Type Sequence",
    "Keyword": "ImageDataTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9808)",
    "Name": "Data Type",
    "Keyword": "DataType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9809)",
    "Name": "Transducer Scan Pattern Code Sequence",
    "Keyword": "TransducerScanPatternCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980B)",
    "Name": "Aliased Data Type",
    "Keyword": "AliasedDataType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980C)",
    "Name": "Position Measuring Device Used",
    "Keyword": "PositionMeasuringDeviceUsed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980D)",
    "Name": "Transducer Geometry Code Sequence",
    "Keyword": "TransducerGeometryCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980E)",
    "Name": "Transducer Beam Steering Code Sequence",
    "Keyword": "TransducerBeamSteeringCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980F)",
    "Name": "Transducer Application Code Sequence",
    "Keyword": "TransducerApplicationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9810)",
    "Name": "Zero Velocity Pixel Value",
    "Keyword": "ZeroVelocityPixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A001)",
    "Name": "Contributing Equipment Sequence",
    "Keyword": "ContributingEquipmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A002)",
    "Name": "Contribution DateTime",
    "Keyword": "ContributionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A003)",
    "Name": "Contribution Description",
    "Keyword": "ContributionDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,000D)",
    "Name": "Study Instance UID",
    "Keyword": "StudyInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,000E)",
    "Name": "Series Instance UID",
    "Keyword": "SeriesInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0010)",
    "Name": "Study ID",
    "Keyword": "StudyID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0011)",
    "Name": "Series Number",
    "Keyword": "SeriesNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0012)",
    "Name": "Acquisition Number",
    "Keyword": "AcquisitionNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0013)",
    "Name": "Instance Number",
    "Keyword": "InstanceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0014)",
    "Name": "Isotope Number",
    "Keyword": "IsotopeNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0015)",
    "Name": "Phase Number",
    "Keyword": "PhaseNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0016)",
    "Name": "Interval Number",
    "Keyword": "IntervalNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0017)",
    "Name": "Time Slot Number",
    "Keyword": "TimeSlotNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0018)",
    "Name": "Angle Number",
    "Keyword": "AngleNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0019)",
    "Name": "Item Number",
    "Keyword": "ItemNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0020)",
    "Name": "Patient Orientation",
    "Keyword": "PatientOrientation",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0020,0022)",
    "Name": "Overlay Number",
    "Keyword": "OverlayNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0024)",
    "Name": "Curve Number",
    "Keyword": "CurveNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0026)",
    "Name": "LUT Number",
    "Keyword": "LUTNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0030)",
    "Name": "Image Position",
    "Keyword": "ImagePosition",
    "VR": "DS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0032)",
    "Name": "Image Position (Patient)",
    "Keyword": "ImagePositionPatient",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,0035)",
    "Name": "Image Orientation",
    "Keyword": "ImageOrientation",
    "VR": "DS",
    "VM": "6",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0037)",
    "Name": "Image Orientation (Patient)",
    "Keyword": "ImageOrientationPatient",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0020,0050)",
    "Name": "Location",
    "Keyword": "Location",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0052)",
    "Name": "Frame of Reference UID",
    "Keyword": "FrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0060)",
    "Name": "Laterality",
    "Keyword": "Laterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0062)",
    "Name": "Image Laterality",
    "Keyword": "ImageLaterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0070)",
    "Name": "Image Geometry Type",
    "Keyword": "ImageGeometryType",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0080)",
    "Name": "Masking Image",
    "Keyword": "MaskingImage",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,00AA)",
    "Name": "Report Number",
    "Keyword": "ReportNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0100)",
    "Name": "Temporal Position Identifier",
    "Keyword": "TemporalPositionIdentifier",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0105)",
    "Name": "Number of Temporal Positions",
    "Keyword": "NumberOfTemporalPositions",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0110)",
    "Name": "Temporal Resolution",
    "Keyword": "TemporalResolution",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0200)",
    "Name": "Synchronization Frame of Reference UID",
    "Keyword": "SynchronizationFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0242)",
    "Name": "SOP Instance UID of Concatenation Source",
    "Keyword": "SOPInstanceUIDOfConcatenationSource",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1000)",
    "Name": "Series in Study",
    "Keyword": "SeriesInStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1001)",
    "Name": "Acquisitions in Series",
    "Keyword": "AcquisitionsInSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1002)",
    "Name": "Images in Acquisition",
    "Keyword": "ImagesInAcquisition",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1003)",
    "Name": "Images in Series",
    "Keyword": "ImagesInSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1004)",
    "Name": "Acquisitions in Study",
    "Keyword": "AcquisitionsInStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1005)",
    "Name": "Images in Study",
    "Keyword": "ImagesInStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1020)",
    "Name": "Reference",
    "Keyword": "Reference",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1040)",
    "Name": "Position Reference Indicator",
    "Keyword": "PositionReferenceIndicator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1041)",
    "Name": "Slice Location",
    "Keyword": "SliceLocation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1070)",
    "Name": "Other Study Numbers",
    "Keyword": "OtherStudyNumbers",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1200)",
    "Name": "Number of Patient Related Studies",
    "Keyword": "NumberOfPatientRelatedStudies",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1202)",
    "Name": "Number of Patient Related Series",
    "Keyword": "NumberOfPatientRelatedSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1204)",
    "Name": "Number of Patient Related Instances",
    "Keyword": "NumberOfPatientRelatedInstances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1206)",
    "Name": "Number of Study Related Series",
    "Keyword": "NumberOfStudyRelatedSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1208)",
    "Name": "Number of Study Related Instances",
    "Keyword": "NumberOfStudyRelatedInstances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1209)",
    "Name": "Number of Series Related Instances",
    "Keyword": "NumberOfSeriesRelatedInstances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,31xx)",
    "Name": "Source Image IDs",
    "Keyword": "SourceImageIDs",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3401)",
    "Name": "Modifying Device ID",
    "Keyword": "ModifyingDeviceID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3402)",
    "Name": "Modified Image ID",
    "Keyword": "ModifiedImageID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3403)",
    "Name": "Modified Image Date",
    "Keyword": "ModifiedImageDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3404)",
    "Name": "Modifying Device Manufacturer",
    "Keyword": "ModifyingDeviceManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3405)",
    "Name": "Modified Image Time",
    "Keyword": "ModifiedImageTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3406)",
    "Name": "Modified Image Description",
    "Keyword": "ModifiedImageDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,4000)",
    "Name": "Image Comments",
    "Keyword": "ImageComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,5000)",
    "Name": "Original Image Identification",
    "Keyword": "OriginalImageIdentification",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,5002)",
    "Name": "Original Image Identification Nomenclature",
    "Keyword": "OriginalImageIdentificationNomenclature",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,9056)",
    "Name": "Stack ID",
    "Keyword": "StackID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9057)",
    "Name": "In-Stack Position Number",
    "Keyword": "InStackPositionNumber",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9071)",
    "Name": "Frame Anatomy Sequence",
    "Keyword": "FrameAnatomySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9072)",
    "Name": "Frame Laterality",
    "Keyword": "FrameLaterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9111)",
    "Name": "Frame Content Sequence",
    "Keyword": "FrameContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9113)",
    "Name": "Plane Position Sequence",
    "Keyword": "PlanePositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9116)",
    "Name": "Plane Orientation Sequence",
    "Keyword": "PlaneOrientationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9128)",
    "Name": "Temporal Position Index",
    "Keyword": "TemporalPositionIndex",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9153)",
    "Name": "Nominal Cardiac Trigger Delay Time",
    "Keyword": "NominalCardiacTriggerDelayTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9154)",
    "Name": "Nominal Cardiac Trigger Time Prior To R-Peak",
    "Keyword": "NominalCardiacTriggerTimePriorToRPeak",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9155)",
    "Name": "Actual Cardiac Trigger Time Prior To R-Peak",
    "Keyword": "ActualCardiacTriggerTimePriorToRPeak",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9156)",
    "Name": "Frame Acquisition Number",
    "Keyword": "FrameAcquisitionNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9157)",
    "Name": "Dimension Index Values",
    "Keyword": "DimensionIndexValues",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0020,9158)",
    "Name": "Frame Comments",
    "Keyword": "FrameComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9161)",
    "Name": "Concatenation UID",
    "Keyword": "ConcatenationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9162)",
    "Name": "In-concatenation Number",
    "Keyword": "InConcatenationNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9163)",
    "Name": "In-concatenation Total Number",
    "Keyword": "InConcatenationTotalNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9164)",
    "Name": "Dimension Organization UID",
    "Keyword": "DimensionOrganizationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9165)",
    "Name": "Dimension Index Pointer",
    "Keyword": "DimensionIndexPointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9167)",
    "Name": "Functional Group Pointer",
    "Keyword": "FunctionalGroupPointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9170)",
    "Name": "Unassigned Shared Converted Attributes Sequence",
    "Keyword": "UnassignedSharedConvertedAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9171)",
    "Name": "Unassigned Per-Frame Converted Attributes Sequence",
    "Keyword": "UnassignedPerFrameConvertedAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9172)",
    "Name": "Conversion Source Attributes Sequence",
    "Keyword": "ConversionSourceAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9213)",
    "Name": "Dimension Index Private Creator",
    "Keyword": "DimensionIndexPrivateCreator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9221)",
    "Name": "Dimension Organization Sequence",
    "Keyword": "DimensionOrganizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9222)",
    "Name": "Dimension Index Sequence",
    "Keyword": "DimensionIndexSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9228)",
    "Name": "Concatenation Frame Offset Number",
    "Keyword": "ConcatenationFrameOffsetNumber",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9238)",
    "Name": "Functional Group Private Creator",
    "Keyword": "FunctionalGroupPrivateCreator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9241)",
    "Name": "Nominal Percentage of Cardiac Phase",
    "Keyword": "NominalPercentageOfCardiacPhase",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9245)",
    "Name": "Nominal Percentage of Respiratory Phase",
    "Keyword": "NominalPercentageOfRespiratoryPhase",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9246)",
    "Name": "Starting Respiratory Amplitude",
    "Keyword": "StartingRespiratoryAmplitude",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9247)",
    "Name": "Starting Respiratory Phase",
    "Keyword": "StartingRespiratoryPhase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9248)",
    "Name": "Ending Respiratory Amplitude",
    "Keyword": "EndingRespiratoryAmplitude",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9249)",
    "Name": "Ending Respiratory Phase",
    "Keyword": "EndingRespiratoryPhase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9250)",
    "Name": "Respiratory Trigger Type",
    "Keyword": "RespiratoryTriggerType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9251)",
    "Name": "R-R Interval Time Nominal",
    "Keyword": "RRIntervalTimeNominal",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9252)",
    "Name": "Actual Cardiac Trigger Delay Time",
    "Keyword": "ActualCardiacTriggerDelayTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9253)",
    "Name": "Respiratory Synchronization Sequence",
    "Keyword": "RespiratorySynchronizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9254)",
    "Name": "Respiratory Interval Time",
    "Keyword": "RespiratoryIntervalTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9255)",
    "Name": "Nominal Respiratory Trigger Delay Time",
    "Keyword": "NominalRespiratoryTriggerDelayTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9256)",
    "Name": "Respiratory Trigger Delay Threshold",
    "Keyword": "RespiratoryTriggerDelayThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9257)",
    "Name": "Actual Respiratory Trigger Delay Time",
    "Keyword": "ActualRespiratoryTriggerDelayTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9301)",
    "Name": "Image Position (Volume)",
    "Keyword": "ImagePositionVolume",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,9302)",
    "Name": "Image Orientation (Volume)",
    "Keyword": "ImageOrientationVolume",
    "VR": "FD",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0020,9307)",
    "Name": "Ultrasound Acquisition Geometry",
    "Keyword": "UltrasoundAcquisitionGeometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9308)",
    "Name": "Apex Position",
    "Keyword": "ApexPosition",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,9309)",
    "Name": "Volume to Transducer Mapping Matrix",
    "Keyword": "VolumeToTransducerMappingMatrix",
    "VR": "FD",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0020,930A)",
    "Name": "Volume to Table Mapping Matrix",
    "Keyword": "VolumeToTableMappingMatrix",
    "VR": "FD",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0020,930C)",
    "Name": "Patient Frame of Reference Source",
    "Keyword": "PatientFrameOfReferenceSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930D)",
    "Name": "Temporal Position Time Offset",
    "Keyword": "TemporalPositionTimeOffset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930E)",
    "Name": "Plane Position (Volume) Sequence",
    "Keyword": "PlanePositionVolumeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930F)",
    "Name": "Plane Orientation (Volume) Sequence",
    "Keyword": "PlaneOrientationVolumeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9310)",
    "Name": "Temporal Position Sequence",
    "Keyword": "TemporalPositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9311)",
    "Name": "Dimension Organization Type",
    "Keyword": "DimensionOrganizationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9312)",
    "Name": "Volume Frame of Reference UID",
    "Keyword": "VolumeFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9313)",
    "Name": "Table Frame of Reference UID",
    "Keyword": "TableFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9421)",
    "Name": "Dimension Description Label",
    "Keyword": "DimensionDescriptionLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9450)",
    "Name": "Patient Orientation in Frame Sequence",
    "Keyword": "PatientOrientationInFrameSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9453)",
    "Name": "Frame Label",
    "Keyword": "FrameLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9518)",
    "Name": "Acquisition Index",
    "Keyword": "AcquisitionIndex",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0020,9529)",
    "Name": "Contributing SOP Instances Reference Sequence",
    "Keyword": "ContributingSOPInstancesReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9536)",
    "Name": "Reconstruction Index",
    "Keyword": "ReconstructionIndex",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0001)",
    "Name": "Light Path Filter Pass-Through Wavelength",
    "Keyword": "LightPathFilterPassThroughWavelength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0002)",
    "Name": "Light Path Filter Pass Band",
    "Keyword": "LightPathFilterPassBand",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,0003)",
    "Name": "Image Path Filter Pass-Through Wavelength",
    "Keyword": "ImagePathFilterPassThroughWavelength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0004)",
    "Name": "Image Path Filter Pass Band",
    "Keyword": "ImagePathFilterPassBand",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,0005)",
    "Name": "Patient Eye Movement Commanded",
    "Keyword": "PatientEyeMovementCommanded",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0006)",
    "Name": "Patient Eye Movement Command Code Sequence",
    "Keyword": "PatientEyeMovementCommandCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0007)",
    "Name": "Spherical Lens Power",
    "Keyword": "SphericalLensPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0008)",
    "Name": "Cylinder Lens Power",
    "Keyword": "CylinderLensPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0009)",
    "Name": "Cylinder Axis",
    "Keyword": "CylinderAxis",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000A)",
    "Name": "Emmetropic Magnification",
    "Keyword": "EmmetropicMagnification",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000B)",
    "Name": "Intra Ocular Pressure",
    "Keyword": "IntraOcularPressure",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000C)",
    "Name": "Horizontal Field of View",
    "Keyword": "HorizontalFieldOfView",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000D)",
    "Name": "Pupil Dilated",
    "Keyword": "PupilDilated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000E)",
    "Name": "Degree of Dilation",
    "Keyword": "DegreeOfDilation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0010)",
    "Name": "Stereo Baseline Angle",
    "Keyword": "StereoBaselineAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0011)",
    "Name": "Stereo Baseline Displacement",
    "Keyword": "StereoBaselineDisplacement",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0012)",
    "Name": "Stereo Horizontal Pixel Offset",
    "Keyword": "StereoHorizontalPixelOffset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0013)",
    "Name": "Stereo Vertical Pixel Offset",
    "Keyword": "StereoVerticalPixelOffset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0014)",
    "Name": "Stereo Rotation",
    "Keyword": "StereoRotation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0015)",
    "Name": "Acquisition Device Type Code Sequence",
    "Keyword": "AcquisitionDeviceTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0016)",
    "Name": "Illumination Type Code Sequence",
    "Keyword": "IlluminationTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0017)",
    "Name": "Light Path Filter Type Stack Code Sequence",
    "Keyword": "LightPathFilterTypeStackCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0018)",
    "Name": "Image Path Filter Type Stack Code Sequence",
    "Keyword": "ImagePathFilterTypeStackCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0019)",
    "Name": "Lenses Code Sequence",
    "Keyword": "LensesCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001A)",
    "Name": "Channel Description Code Sequence",
    "Keyword": "ChannelDescriptionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001B)",
    "Name": "Refractive State Sequence",
    "Keyword": "RefractiveStateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001C)",
    "Name": "Mydriatic Agent Code Sequence",
    "Keyword": "MydriaticAgentCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001D)",
    "Name": "Relative Image Position Code Sequence",
    "Keyword": "RelativeImagePositionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001E)",
    "Name": "Camera Angle of View",
    "Keyword": "CameraAngleOfView",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0020)",
    "Name": "Stereo Pairs Sequence",
    "Keyword": "StereoPairsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0021)",
    "Name": "Left Image Sequence",
    "Keyword": "LeftImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0022)",
    "Name": "Right Image Sequence",
    "Keyword": "RightImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0030)",
    "Name": "Axial Length of the Eye",
    "Keyword": "AxialLengthOfTheEye",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0031)",
    "Name": "Ophthalmic Frame Location Sequence",
    "Keyword": "OphthalmicFrameLocationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0032)",
    "Name": "Reference Coordinates",
    "Keyword": "ReferenceCoordinates",
    "VR": "FL",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0022,0035)",
    "Name": "Depth Spatial Resolution",
    "Keyword": "DepthSpatialResolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0036)",
    "Name": "Maximum Depth Distortion",
    "Keyword": "MaximumDepthDistortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0037)",
    "Name": "Along-scan Spatial Resolution",
    "Keyword": "AlongScanSpatialResolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0038)",
    "Name": "Maximum Along-scan Distortion",
    "Keyword": "MaximumAlongScanDistortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0039)",
    "Name": "Ophthalmic Image Orientation",
    "Keyword": "OphthalmicImageOrientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0041)",
    "Name": "Depth of Transverse Image",
    "Keyword": "DepthOfTransverseImage",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0042)",
    "Name": "Mydriatic Agent Concentration Units Sequence",
    "Keyword": "MydriaticAgentConcentrationUnitsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0048)",
    "Name": "Across-scan Spatial Resolution",
    "Keyword": "AcrossScanSpatialResolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0049)",
    "Name": "Maximum Across-scan Distortion",
    "Keyword": "MaximumAcrossScanDistortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,004E)",
    "Name": "Mydriatic Agent Concentration",
    "Keyword": "MydriaticAgentConcentration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0055)",
    "Name": "Illumination Wave Length",
    "Keyword": "IlluminationWaveLength",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0056)",
    "Name": "Illumination Power",
    "Keyword": "IlluminationPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0057)",
    "Name": "Illumination Bandwidth",
    "Keyword": "IlluminationBandwidth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0058)",
    "Name": "Mydriatic Agent Sequence",
    "Keyword": "MydriaticAgentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1007)",
    "Name": "Ophthalmic Axial Measurements Right Eye Sequence",
    "Keyword": "OphthalmicAxialMeasurementsRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1008)",
    "Name": "Ophthalmic Axial Measurements Left Eye Sequence",
    "Keyword": "OphthalmicAxialMeasurementsLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1009)",
    "Name": "Ophthalmic Axial Measurements Device Type",
    "Keyword": "OphthalmicAxialMeasurementsDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1010)",
    "Name": "Ophthalmic Axial Length Measurements Type",
    "Keyword": "OphthalmicAxialLengthMeasurementsType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1012)",
    "Name": "Ophthalmic Axial Length Sequence",
    "Keyword": "OphthalmicAxialLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1019)",
    "Name": "Ophthalmic Axial Length",
    "Keyword": "OphthalmicAxialLength",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1024)",
    "Name": "Lens Status Code Sequence",
    "Keyword": "LensStatusCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1025)",
    "Name": "Vitreous Status Code Sequence",
    "Keyword": "VitreousStatusCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1028)",
    "Name": "IOL Formula Code Sequence",
    "Keyword": "IOLFormulaCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1029)",
    "Name": "IOL Formula Detail",
    "Keyword": "IOLFormulaDetail",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1033)",
    "Name": "Keratometer Index",
    "Keyword": "KeratometerIndex",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1035)",
    "Name": "Source of Ophthalmic Axial Length Code Sequence",
    "Keyword": "SourceOfOphthalmicAxialLengthCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1037)",
    "Name": "Target Refraction",
    "Keyword": "TargetRefraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1039)",
    "Name": "Refractive Procedure Occurred",
    "Keyword": "RefractiveProcedureOccurred",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1040)",
    "Name": "Refractive Surgery Type Code Sequence",
    "Keyword": "RefractiveSurgeryTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1044)",
    "Name": "Ophthalmic Ultrasound Method Code Sequence",
    "Keyword": "OphthalmicUltrasoundMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1050)",
    "Name": "Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "OphthalmicAxialLengthMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1053)",
    "Name": "IOL Power",
    "Keyword": "IOLPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1054)",
    "Name": "Predicted Refractive Error",
    "Keyword": "PredictedRefractiveError",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1059)",
    "Name": "Ophthalmic Axial Length Velocity",
    "Keyword": "OphthalmicAxialLengthVelocity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1065)",
    "Name": "Lens Status Description",
    "Keyword": "LensStatusDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1066)",
    "Name": "Vitreous Status Description",
    "Keyword": "VitreousStatusDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1090)",
    "Name": "IOL Power Sequence",
    "Keyword": "IOLPowerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1092)",
    "Name": "Lens Constant Sequence",
    "Keyword": "LensConstantSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1093)",
    "Name": "IOL Manufacturer",
    "Keyword": "IOLManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1094)",
    "Name": "Lens Constant Description",
    "Keyword": "LensConstantDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1095)",
    "Name": "Implant Name",
    "Keyword": "ImplantName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1096)",
    "Name": "Keratometry Measurement Type Code Sequence",
    "Keyword": "KeratometryMeasurementTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1097)",
    "Name": "Implant Part Number",
    "Keyword": "ImplantPartNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1100)",
    "Name": "Referenced Ophthalmic Axial Measurements Sequence",
    "Keyword": "ReferencedOphthalmicAxialMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1101)",
    "Name": "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
    "Keyword": "OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1103)",
    "Name": "Refractive Error Before Refractive Surgery Code Sequence",
    "Keyword": "RefractiveErrorBeforeRefractiveSurgeryCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1121)",
    "Name": "IOL Power For Exact Emmetropia",
    "Keyword": "IOLPowerForExactEmmetropia",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1122)",
    "Name": "IOL Power For Exact Target Refraction",
    "Keyword": "IOLPowerForExactTargetRefraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1125)",
    "Name": "Anterior Chamber Depth Definition Code Sequence",
    "Keyword": "AnteriorChamberDepthDefinitionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1127)",
    "Name": "Lens Thickness Sequence",
    "Keyword": "LensThicknessSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1128)",
    "Name": "Anterior Chamber Depth Sequence",
    "Keyword": "AnteriorChamberDepthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1130)",
    "Name": "Lens Thickness",
    "Keyword": "LensThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1131)",
    "Name": "Anterior Chamber Depth",
    "Keyword": "AnteriorChamberDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1132)",
    "Name": "Source of Lens Thickness Data Code Sequence",
    "Keyword": "SourceOfLensThicknessDataCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1133)",
    "Name": "Source of Anterior Chamber Depth Data Code Sequence",
    "Keyword": "SourceOfAnteriorChamberDepthDataCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1134)",
    "Name": "Source of Refractive Measurements Sequence",
    "Keyword": "SourceOfRefractiveMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1135)",
    "Name": "Source of Refractive Measurements Code Sequence",
    "Keyword": "SourceOfRefractiveMeasurementsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1140)",
    "Name": "Ophthalmic Axial Length Measurement Modified",
    "Keyword": "OphthalmicAxialLengthMeasurementModified",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1150)",
    "Name": "Ophthalmic Axial Length Data Source Code Sequence",
    "Keyword": "OphthalmicAxialLengthDataSourceCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1153)",
    "Name": "Ophthalmic Axial Length Acquisition Method Code Sequence",
    "Keyword": "OphthalmicAxialLengthAcquisitionMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1155)",
    "Name": "Signal to Noise Ratio",
    "Keyword": "SignalToNoiseRatio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1159)",
    "Name": "Ophthalmic Axial Length Data Source Description",
    "Keyword": "OphthalmicAxialLengthDataSourceDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1210)",
    "Name": "Ophthalmic Axial Length Measurements Total Length Sequence",
    "Keyword": "OphthalmicAxialLengthMeasurementsTotalLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1211)",
    "Name": "Ophthalmic Axial Length Measurements Segmental Length Sequence",
    "Keyword": "OphthalmicAxialLengthMeasurementsSegmentalLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1212)",
    "Name": "Ophthalmic Axial Length Measurements Length Summation Sequence",
    "Keyword": "OphthalmicAxialLengthMeasurementsLengthSummationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1220)",
    "Name": "Ultrasound Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "UltrasoundOphthalmicAxialLengthMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1225)",
    "Name": "Optical Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "OpticalOphthalmicAxialLengthMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1230)",
    "Name": "Ultrasound Selected Ophthalmic Axial Length Sequence",
    "Keyword": "UltrasoundSelectedOphthalmicAxialLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1250)",
    "Name": "Ophthalmic Axial Length Selection Method Code Sequence",
    "Keyword": "OphthalmicAxialLengthSelectionMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1255)",
    "Name": "Optical Selected Ophthalmic Axial Length Sequence",
    "Keyword": "OpticalSelectedOphthalmicAxialLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1257)",
    "Name": "Selected Segmental Ophthalmic Axial Length Sequence",
    "Keyword": "SelectedSegmentalOphthalmicAxialLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1260)",
    "Name": "Selected Total Ophthalmic Axial Length Sequence",
    "Keyword": "SelectedTotalOphthalmicAxialLengthSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1262)",
    "Name": "Ophthalmic Axial Length Quality Metric Sequence",
    "Keyword": "OphthalmicAxialLengthQualityMetricSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1265)",
    "Name": "Ophthalmic Axial Length Quality Metric Type Code Sequence",
    "Keyword": "OphthalmicAxialLengthQualityMetricTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1273)",
    "Name": "Ophthalmic Axial Length Quality Metric Type Description",
    "Keyword": "OphthalmicAxialLengthQualityMetricTypeDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1300)",
    "Name": "Intraocular Lens Calculations Right Eye Sequence",
    "Keyword": "IntraocularLensCalculationsRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1310)",
    "Name": "Intraocular Lens Calculations Left Eye Sequence",
    "Keyword": "IntraocularLensCalculationsLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1330)",
    "Name": "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
    "Keyword": "ReferencedOphthalmicAxialLengthMeasurementQCImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1415)",
    "Name": "Ophthalmic Mapping Device Type",
    "Keyword": "OphthalmicMappingDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1420)",
    "Name": "Acquisition Method Code Sequence",
    "Keyword": "AcquisitionMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1423)",
    "Name": "Acquisition Method Algorithm Sequence",
    "Keyword": "AcquisitionMethodAlgorithmSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1436)",
    "Name": "Ophthalmic Thickness Map Type Code Sequence",
    "Keyword": "OphthalmicThicknessMapTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1443)",
    "Name": "Ophthalmic Thickness Mapping Normals Sequence",
    "Keyword": "OphthalmicThicknessMappingNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1445)",
    "Name": "Retinal Thickness Definition Code Sequence",
    "Keyword": "RetinalThicknessDefinitionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1450)",
    "Name": "Pixel Value Mapping to Coded Concept Sequence",
    "Keyword": "PixelValueMappingToCodedConceptSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1452)",
    "Name": "Mapped Pixel Value",
    "Keyword": "MappedPixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1454)",
    "Name": "Pixel Value Mapping Explanation",
    "Keyword": "PixelValueMappingExplanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1458)",
    "Name": "Ophthalmic Thickness Map Quality Threshold Sequence",
    "Keyword": "OphthalmicThicknessMapQualityThresholdSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1460)",
    "Name": "Ophthalmic Thickness Map Threshold Quality Rating",
    "Keyword": "OphthalmicThicknessMapThresholdQualityRating",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1463)",
    "Name": "Anatomic Structure Reference Point",
    "Keyword": "AnatomicStructureReferencePoint",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1465)",
    "Name": "Registration to Localizer Sequence",
    "Keyword": "RegistrationToLocalizerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1466)",
    "Name": "Registered Localizer Units",
    "Keyword": "RegisteredLocalizerUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1467)",
    "Name": "Registered Localizer Top Left Hand Corner",
    "Keyword": "RegisteredLocalizerTopLeftHandCorner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1468)",
    "Name": "Registered Localizer Bottom Right Hand Corner",
    "Keyword": "RegisteredLocalizerBottomRightHandCorner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1470)",
    "Name": "Ophthalmic Thickness Map Quality Rating Sequence",
    "Keyword": "OphthalmicThicknessMapQualityRatingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1472)",
    "Name": "Relevant OPT Attributes Sequence",
    "Keyword": "RelevantOPTAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0010)",
    "Name": "Visual Field Horizontal Extent",
    "Keyword": "VisualFieldHorizontalExtent",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0011)",
    "Name": "Visual Field Vertical Extent",
    "Keyword": "VisualFieldVerticalExtent",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0012)",
    "Name": "Visual Field Shape",
    "Keyword": "VisualFieldShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0016)",
    "Name": "Screening Test Mode Code Sequence",
    "Keyword": "ScreeningTestModeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0018)",
    "Name": "Maximum Stimulus Luminance",
    "Keyword": "MaximumStimulusLuminance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0020)",
    "Name": "Background Luminance",
    "Keyword": "BackgroundLuminance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0021)",
    "Name": "Stimulus Color Code Sequence",
    "Keyword": "StimulusColorCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0024)",
    "Name": "Background Illumination Color Code Sequence",
    "Keyword": "BackgroundIlluminationColorCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0025)",
    "Name": "Stimulus Area",
    "Keyword": "StimulusArea",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0028)",
    "Name": "Stimulus Presentation Time",
    "Keyword": "StimulusPresentationTime",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0032)",
    "Name": "Fixation Sequence",
    "Keyword": "FixationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0033)",
    "Name": "Fixation Monitoring Code Sequence",
    "Keyword": "FixationMonitoringCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0034)",
    "Name": "Visual Field Catch Trial Sequence",
    "Keyword": "VisualFieldCatchTrialSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0035)",
    "Name": "Fixation Checked Quantity",
    "Keyword": "FixationCheckedQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0036)",
    "Name": "Patient Not Properly Fixated Quantity",
    "Keyword": "PatientNotProperlyFixatedQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0037)",
    "Name": "Presented Visual Stimuli Data Flag",
    "Keyword": "PresentedVisualStimuliDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0038)",
    "Name": "Number of Visual Stimuli",
    "Keyword": "NumberOfVisualStimuli",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0039)",
    "Name": "Excessive Fixation Losses Data Flag",
    "Keyword": "ExcessiveFixationLossesDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0040)",
    "Name": "Excessive Fixation Losses",
    "Keyword": "ExcessiveFixationLosses",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0042)",
    "Name": "Stimuli Retesting Quantity",
    "Keyword": "StimuliRetestingQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0044)",
    "Name": "Comments on Patient's Performance of Visual Field",
    "Keyword": "CommentsOnPatientPerformanceOfVisualField",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0045)",
    "Name": "False Negatives Estimate Flag",
    "Keyword": "FalseNegativesEstimateFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0046)",
    "Name": "False Negatives Estimate",
    "Keyword": "FalseNegativesEstimate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0048)",
    "Name": "Negative Catch Trials Quantity",
    "Keyword": "NegativeCatchTrialsQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0050)",
    "Name": "False Negatives Quantity",
    "Keyword": "FalseNegativesQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0051)",
    "Name": "Excessive False Negatives Data Flag",
    "Keyword": "ExcessiveFalseNegativesDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0052)",
    "Name": "Excessive False Negatives",
    "Keyword": "ExcessiveFalseNegatives",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0053)",
    "Name": "False Positives Estimate Flag",
    "Keyword": "FalsePositivesEstimateFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0054)",
    "Name": "False Positives Estimate",
    "Keyword": "FalsePositivesEstimate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0055)",
    "Name": "Catch Trials Data Flag",
    "Keyword": "CatchTrialsDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0056)",
    "Name": "Positive Catch Trials Quantity",
    "Keyword": "PositiveCatchTrialsQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0057)",
    "Name": "Test Point Normals Data Flag",
    "Keyword": "TestPointNormalsDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0058)",
    "Name": "Test Point Normals Sequence",
    "Keyword": "TestPointNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0059)",
    "Name": "Global Deviation Probability Normals Flag",
    "Keyword": "GlobalDeviationProbabilityNormalsFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0060)",
    "Name": "False Positives Quantity",
    "Keyword": "FalsePositivesQuantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0061)",
    "Name": "Excessive False Positives Data Flag",
    "Keyword": "ExcessiveFalsePositivesDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0062)",
    "Name": "Excessive False Positives",
    "Keyword": "ExcessiveFalsePositives",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0063)",
    "Name": "Visual Field Test Normals Flag",
    "Keyword": "VisualFieldTestNormalsFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0064)",
    "Name": "Results Normals Sequence",
    "Keyword": "ResultsNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0065)",
    "Name": "Age Corrected Sensitivity Deviation Algorithm Sequence",
    "Keyword": "AgeCorrectedSensitivityDeviationAlgorithmSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0066)",
    "Name": "Global Deviation From Normal",
    "Keyword": "GlobalDeviationFromNormal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0067)",
    "Name": "Generalized Defect Sensitivity Deviation Algorithm Sequence",
    "Keyword": "GeneralizedDefectSensitivityDeviationAlgorithmSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0068)",
    "Name": "Localized Deviation From Normal",
    "Keyword": "LocalizedDeviationFromNormal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0069)",
    "Name": "Patient Reliability Indicator",
    "Keyword": "PatientReliabilityIndicator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0070)",
    "Name": "Visual Field Mean Sensitivity",
    "Keyword": "VisualFieldMeanSensitivity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0071)",
    "Name": "Global Deviation Probability",
    "Keyword": "GlobalDeviationProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0072)",
    "Name": "Local Deviation Probability Normals Flag",
    "Keyword": "LocalDeviationProbabilityNormalsFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0073)",
    "Name": "Localized Deviation Probability",
    "Keyword": "LocalizedDeviationProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0074)",
    "Name": "Short Term Fluctuation Calculated",
    "Keyword": "ShortTermFluctuationCalculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0075)",
    "Name": "Short Term Fluctuation",
    "Keyword": "ShortTermFluctuation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0076)",
    "Name": "Short Term Fluctuation Probability Calculated",
    "Keyword": "ShortTermFluctuationProbabilityCalculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0077)",
    "Name": "Short Term Fluctuation Probability",
    "Keyword": "ShortTermFluctuationProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0078)",
    "Name": "Corrected Localized Deviation From Normal Calculated",
    "Keyword": "CorrectedLocalizedDeviationFromNormalCalculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0079)",
    "Name": "Corrected Localized Deviation From Normal",
    "Keyword": "CorrectedLocalizedDeviationFromNormal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0080)",
    "Name": "Corrected Localized Deviation From Normal Probability Calculated",
    "Keyword": "CorrectedLocalizedDeviationFromNormalProbabilityCalculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0081)",
    "Name": "Corrected Localized Deviation From Normal Probability",
    "Keyword": "CorrectedLocalizedDeviationFromNormalProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0083)",
    "Name": "Global Deviation Probability Sequence",
    "Keyword": "GlobalDeviationProbabilitySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0085)",
    "Name": "Localized Deviation Probability Sequence",
    "Keyword": "LocalizedDeviationProbabilitySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0086)",
    "Name": "Foveal Sensitivity Measured",
    "Keyword": "FovealSensitivityMeasured",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0087)",
    "Name": "Foveal Sensitivity",
    "Keyword": "FovealSensitivity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0088)",
    "Name": "Visual Field Test Duration",
    "Keyword": "VisualFieldTestDuration",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0089)",
    "Name": "Visual Field Test Point Sequence",
    "Keyword": "VisualFieldTestPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0090)",
    "Name": "Visual Field Test Point X-Coordinate",
    "Keyword": "VisualFieldTestPointXCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0091)",
    "Name": "Visual Field Test Point Y-Coordinate",
    "Keyword": "VisualFieldTestPointYCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0092)",
    "Name": "Age Corrected Sensitivity Deviation Value",
    "Keyword": "AgeCorrectedSensitivityDeviationValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0093)",
    "Name": "Stimulus Results",
    "Keyword": "StimulusResults",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0094)",
    "Name": "Sensitivity Value",
    "Keyword": "SensitivityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0095)",
    "Name": "Retest Stimulus Seen",
    "Keyword": "RetestStimulusSeen",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0096)",
    "Name": "Retest Sensitivity Value",
    "Keyword": "RetestSensitivityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0097)",
    "Name": "Visual Field Test Point Normals Sequence",
    "Keyword": "VisualFieldTestPointNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0098)",
    "Name": "Quantified Defect",
    "Keyword": "QuantifiedDefect",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0100)",
    "Name": "Age Corrected Sensitivity Deviation Probability Value",
    "Keyword": "AgeCorrectedSensitivityDeviationProbabilityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0102)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Flag",
    "Keyword": "GeneralizedDefectCorrectedSensitivityDeviationFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0103)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Value",
    "Keyword": "GeneralizedDefectCorrectedSensitivityDeviationValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0104)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Probability Value",
    "Keyword": "GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0105)",
    "Name": "Minimum Sensitivity Value",
    "Keyword": "MinimumSensitivityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0106)",
    "Name": "Blind Spot Localized",
    "Keyword": "BlindSpotLocalized",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0107)",
    "Name": "Blind Spot X-Coordinate",
    "Keyword": "BlindSpotXCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0108)",
    "Name": "Blind Spot Y-Coordinate",
    "Keyword": "BlindSpotYCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0110)",
    "Name": "Visual Acuity Measurement Sequence",
    "Keyword": "VisualAcuityMeasurementSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0112)",
    "Name": "Refractive Parameters Used on Patient Sequence",
    "Keyword": "RefractiveParametersUsedOnPatientSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0113)",
    "Name": "Measurement Laterality",
    "Keyword": "MeasurementLaterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0114)",
    "Name": "Ophthalmic Patient Clinical Information Left Eye Sequence",
    "Keyword": "OphthalmicPatientClinicalInformationLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0115)",
    "Name": "Ophthalmic Patient Clinical Information Right Eye Sequence",
    "Keyword": "OphthalmicPatientClinicalInformationRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0117)",
    "Name": "Foveal Point Normative Data Flag",
    "Keyword": "FovealPointNormativeDataFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0118)",
    "Name": "Foveal Point Probability Value",
    "Keyword": "FovealPointProbabilityValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0120)",
    "Name": "Screening Baseline Measured",
    "Keyword": "ScreeningBaselineMeasured",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0122)",
    "Name": "Screening Baseline Measured Sequence",
    "Keyword": "ScreeningBaselineMeasuredSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0124)",
    "Name": "Screening Baseline Type",
    "Keyword": "ScreeningBaselineType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0126)",
    "Name": "Screening Baseline Value",
    "Keyword": "ScreeningBaselineValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0202)",
    "Name": "Algorithm Source",
    "Keyword": "AlgorithmSource",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0306)",
    "Name": "Data Set Name",
    "Keyword": "DataSetName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0307)",
    "Name": "Data Set Version",
    "Keyword": "DataSetVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0308)",
    "Name": "Data Set Source",
    "Keyword": "DataSetSource",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0309)",
    "Name": "Data Set Description",
    "Keyword": "DataSetDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0317)",
    "Name": "Visual Field Test Reliability Global Index Sequence",
    "Keyword": "VisualFieldTestReliabilityGlobalIndexSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0320)",
    "Name": "Visual Field Global Results Index Sequence",
    "Keyword": "VisualFieldGlobalResultsIndexSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0325)",
    "Name": "Data Observation Sequence",
    "Keyword": "DataObservationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0338)",
    "Name": "Index Normals Flag",
    "Keyword": "IndexNormalsFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0341)",
    "Name": "Index Probability",
    "Keyword": "IndexProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0344)",
    "Name": "Index Probability Sequence",
    "Keyword": "IndexProbabilitySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0002)",
    "Name": "Samples per Pixel",
    "Keyword": "SamplesPerPixel",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0003)",
    "Name": "Samples per Pixel Used",
    "Keyword": "SamplesPerPixelUsed",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0004)",
    "Name": "Photometric Interpretation",
    "Keyword": "PhotometricInterpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0005)",
    "Name": "Image Dimensions",
    "Keyword": "ImageDimensions",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0006)",
    "Name": "Planar Configuration",
    "Keyword": "PlanarConfiguration",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0008)",
    "Name": "Number of Frames",
    "Keyword": "NumberOfFrames",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0009)",
    "Name": "Frame Increment Pointer",
    "Keyword": "FrameIncrementPointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,000A)",
    "Name": "Frame Dimension Pointer",
    "Keyword": "FrameDimensionPointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,0010)",
    "Name": "Rows",
    "Keyword": "Rows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0011)",
    "Name": "Columns",
    "Keyword": "Columns",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0012)",
    "Name": "Planes",
    "Keyword": "Planes",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0014)",
    "Name": "Ultrasound Color Data Present",
    "Keyword": "UltrasoundColorDataPresent",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0020)",
    "Name": "",
    "Keyword": "",
    "VR": "",
    "VM": "",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0030)",
    "Name": "Pixel Spacing",
    "Keyword": "PixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0031)",
    "Name": "Zoom Factor",
    "Keyword": "ZoomFactor",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0032)",
    "Name": "Zoom Center",
    "Keyword": "ZoomCenter",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0034)",
    "Name": "Pixel Aspect Ratio",
    "Keyword": "PixelAspectRatio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0040)",
    "Name": "Image Format",
    "Keyword": "ImageFormat",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0050)",
    "Name": "Manipulated Image",
    "Keyword": "ManipulatedImage",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0051)",
    "Name": "Corrected Image",
    "Keyword": "CorrectedImage",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,005F)",
    "Name": "Compression Recognition Code",
    "Keyword": "CompressionRecognitionCode",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0060)",
    "Name": "Compression Code",
    "Keyword": "CompressionCode",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0061)",
    "Name": "Compression Originator",
    "Keyword": "CompressionOriginator",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0062)",
    "Name": "Compression Label",
    "Keyword": "CompressionLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0063)",
    "Name": "Compression Description",
    "Keyword": "CompressionDescription",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0065)",
    "Name": "Compression Sequence",
    "Keyword": "CompressionSequence",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0066)",
    "Name": "Compression Step Pointers",
    "Keyword": "CompressionStepPointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0068)",
    "Name": "Repeat Interval",
    "Keyword": "RepeatInterval",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0069)",
    "Name": "Bits Grouped",
    "Keyword": "BitsGrouped",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0070)",
    "Name": "Perimeter Table",
    "Keyword": "PerimeterTable",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0071)",
    "Name": "Perimeter Value",
    "Keyword": "PerimeterValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0080)",
    "Name": "Predictor Rows",
    "Keyword": "PredictorRows",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0081)",
    "Name": "Predictor Columns",
    "Keyword": "PredictorColumns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0082)",
    "Name": "Predictor Constants",
    "Keyword": "PredictorConstants",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0090)",
    "Name": "Blocked Pixels",
    "Keyword": "BlockedPixels",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0091)",
    "Name": "Block Rows",
    "Keyword": "BlockRows",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0092)",
    "Name": "Block Columns",
    "Keyword": "BlockColumns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0093)",
    "Name": "Row Overlap",
    "Keyword": "RowOverlap",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0094)",
    "Name": "Column Overlap",
    "Keyword": "ColumnOverlap",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0100)",
    "Name": "Bits Allocated",
    "Keyword": "BitsAllocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0101)",
    "Name": "Bits Stored",
    "Keyword": "BitsStored",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0102)",
    "Name": "High Bit",
    "Keyword": "HighBit",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0103)",
    "Name": "Pixel Representation",
    "Keyword": "PixelRepresentation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0104)",
    "Name": "Smallest Valid Pixel Value",
    "Keyword": "SmallestValidPixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0105)",
    "Name": "Largest Valid Pixel Value",
    "Keyword": "LargestValidPixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0106)",
    "Name": "Smallest Image Pixel Value",
    "Keyword": "SmallestImagePixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0107)",
    "Name": "Largest Image Pixel Value",
    "Keyword": "LargestImagePixelValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0108)",
    "Name": "Smallest Pixel Value in Series",
    "Keyword": "SmallestPixelValueInSeries",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0109)",
    "Name": "Largest Pixel Value in Series",
    "Keyword": "LargestPixelValueInSeries",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0110)",
    "Name": "Smallest Image Pixel Value in Plane",
    "Keyword": "SmallestImagePixelValueInPlane",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0111)",
    "Name": "Largest Image Pixel Value in Plane",
    "Keyword": "LargestImagePixelValueInPlane",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0120)",
    "Name": "Pixel Padding Value",
    "Keyword": "PixelPaddingValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0121)",
    "Name": "Pixel Padding Range Limit",
    "Keyword": "PixelPaddingRangeLimit",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0200)",
    "Name": "Image Location",
    "Keyword": "ImageLocation",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0300)",
    "Name": "Quality Control Image",
    "Keyword": "QualityControlImage",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0301)",
    "Name": "Burned In Annotation",
    "Keyword": "BurnedInAnnotation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0302)",
    "Name": "Recognizable Visual Features",
    "Keyword": "RecognizableVisualFeatures",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0303)",
    "Name": "Longitudinal Temporal Information Modified",
    "Keyword": "LongitudinalTemporalInformationModified",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0304)",
    "Name": "Referenced Color Palette Instance UID",
    "Keyword": "ReferencedColorPaletteInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0400)",
    "Name": "Transform Label",
    "Keyword": "TransformLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0401)",
    "Name": "Transform Version Number",
    "Keyword": "TransformVersionNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0402)",
    "Name": "Number of Transform Steps",
    "Keyword": "NumberOfTransformSteps",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0403)",
    "Name": "Sequence of Compressed Data",
    "Keyword": "SequenceOfCompressedData",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0404)",
    "Name": "Details of Coefficients",
    "Keyword": "DetailsOfCoefficients",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x0)",
    "Name": "Rows For Nth Order Coefficients",
    "Keyword": "RowsForNthOrderCoefficients",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x1)",
    "Name": "Columns For Nth Order Coefficients",
    "Keyword": "ColumnsForNthOrderCoefficients",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x2)",
    "Name": "Coefficient Coding",
    "Keyword": "CoefficientCoding",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x3)",
    "Name": "Coefficient Coding Pointers",
    "Keyword": "CoefficientCodingPointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0700)",
    "Name": "DCT Label",
    "Keyword": "DCTLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0701)",
    "Name": "Data Block Description",
    "Keyword": "DataBlockDescription",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0702)",
    "Name": "Data Block",
    "Keyword": "DataBlock",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0710)",
    "Name": "Normalization Factor Format",
    "Keyword": "NormalizationFactorFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0720)",
    "Name": "Zonal Map Number Format",
    "Keyword": "ZonalMapNumberFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0721)",
    "Name": "Zonal Map Location",
    "Keyword": "ZonalMapLocation",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0722)",
    "Name": "Zonal Map Format",
    "Keyword": "ZonalMapFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0730)",
    "Name": "Adaptive Map Format",
    "Keyword": "AdaptiveMapFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0740)",
    "Name": "Code Number Format",
    "Keyword": "CodeNumberFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x0)",
    "Name": "Code Label",
    "Keyword": "CodeLabel",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x2)",
    "Name": "Number of Tables",
    "Keyword": "NumberOfTables",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x3)",
    "Name": "Code Table Location",
    "Keyword": "CodeTableLocation",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x4)",
    "Name": "Bits For Code Word",
    "Keyword": "BitsForCodeWord",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x8)",
    "Name": "Image Data Location",
    "Keyword": "ImageDataLocation",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0A02)",
    "Name": "Pixel Spacing Calibration Type",
    "Keyword": "PixelSpacingCalibrationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0A04)",
    "Name": "Pixel Spacing Calibration Description",
    "Keyword": "PixelSpacingCalibrationDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1040)",
    "Name": "Pixel Intensity Relationship",
    "Keyword": "PixelIntensityRelationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1041)",
    "Name": "Pixel Intensity Relationship Sign",
    "Keyword": "PixelIntensityRelationshipSign",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1050)",
    "Name": "Window Center",
    "Keyword": "WindowCenter",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1051)",
    "Name": "Window Width",
    "Keyword": "WindowWidth",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1052)",
    "Name": "Rescale Intercept",
    "Keyword": "RescaleIntercept",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1053)",
    "Name": "Rescale Slope",
    "Keyword": "RescaleSlope",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1054)",
    "Name": "Rescale Type",
    "Keyword": "RescaleType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1055)",
    "Name": "Window Center & Width Explanation",
    "Keyword": "WindowCenterWidthExplanation",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1056)",
    "Name": "VOI LUT Function",
    "Keyword": "VOILUTFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1080)",
    "Name": "Gray Scale",
    "Keyword": "GrayScale",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1090)",
    "Name": "Recommended Viewing Mode",
    "Keyword": "RecommendedViewingMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1100)",
    "Name": "Gray Lookup Table Descriptor",
    "Keyword": "GrayLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1101)",
    "Name": "Red Palette Color Lookup Table Descriptor",
    "Keyword": "RedPaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1102)",
    "Name": "Green Palette Color Lookup Table Descriptor",
    "Keyword": "GreenPaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1103)",
    "Name": "Blue Palette Color Lookup Table Descriptor",
    "Keyword": "BluePaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1104)",
    "Name": "AlphaPalette ColorLookup Table Descriptor",
    "Keyword": "AlphaPaletteColorLookupTableDescriptor",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1111)",
    "Name": "Large Red Palette Color Lookup Table Descriptor",
    "Keyword": "LargeRedPaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1112)",
    "Name": "Large Green Palette Color Lookup Table Descriptor",
    "Keyword": "LargeGreenPaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1113)",
    "Name": "Large Blue Palette Color Lookup Table Descriptor",
    "Keyword": "LargeBluePaletteColorLookupTableDescriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1199)",
    "Name": "Palette Color Lookup Table UID",
    "Keyword": "PaletteColorLookupTableUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1200)",
    "Name": "Gray Lookup Table Data",
    "Keyword": "GrayLookupTableData",
    "VR": "US or SS or OW",
    "VM": "1-n or 1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1201)",
    "Name": "Red Palette Color Lookup Table Data",
    "Keyword": "RedPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1202)",
    "Name": "Green Palette Color Lookup Table Data",
    "Keyword": "GreenPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1203)",
    "Name": "Blue Palette Color Lookup Table Data",
    "Keyword": "BluePaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1204)",
    "Name": "Alpha Palette Color Lookup Table Data",
    "Keyword": "AlphaPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1211)",
    "Name": "Large Red Palette Color Lookup Table Data",
    "Keyword": "LargeRedPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1212)",
    "Name": "Large Green Palette Color Lookup Table Data",
    "Keyword": "LargeGreenPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1213)",
    "Name": "Large Blue Palette Color Lookup Table Data",
    "Keyword": "LargeBluePaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1214)",
    "Name": "Large Palette Color Lookup Table UID",
    "Keyword": "LargePaletteColorLookupTableUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1221)",
    "Name": "Segmented Red Palette Color Lookup Table Data",
    "Keyword": "SegmentedRedPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1222)",
    "Name": "Segmented Green Palette Color Lookup Table Data",
    "Keyword": "SegmentedGreenPaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1223)",
    "Name": "Segmented Blue Palette Color Lookup Table Data",
    "Keyword": "SegmentedBluePaletteColorLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1300)",
    "Name": "Breast Implant Present",
    "Keyword": "BreastImplantPresent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1350)",
    "Name": "Partial View",
    "Keyword": "PartialView",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1351)",
    "Name": "Partial View Description",
    "Keyword": "PartialViewDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1352)",
    "Name": "Partial View Code Sequence",
    "Keyword": "PartialViewCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,135A)",
    "Name": "Spatial Locations Preserved",
    "Keyword": "SpatialLocationsPreserved",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1401)",
    "Name": "Data Frame Assignment Sequence",
    "Keyword": "DataFrameAssignmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1402)",
    "Name": "Data Path Assignment",
    "Keyword": "DataPathAssignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1403)",
    "Name": "Bits Mapped to Color Lookup Table",
    "Keyword": "BitsMappedToColorLookupTable",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1404)",
    "Name": "Blending LUT 1 Sequence",
    "Keyword": "BlendingLUT1Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1405)",
    "Name": "Blending LUT 1 Transfer Function",
    "Keyword": "BlendingLUT1TransferFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1406)",
    "Name": "Blending Weight Constant",
    "Keyword": "BlendingWeightConstant",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1407)",
    "Name": "Blending Lookup Table Descriptor",
    "Keyword": "BlendingLookupTableDescriptor",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1408)",
    "Name": "Blending Lookup Table Data",
    "Keyword": "BlendingLookupTableData",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140B)",
    "Name": "Enhanced Palette Color Lookup Table Sequence",
    "Keyword": "EnhancedPaletteColorLookupTableSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140C)",
    "Name": "Blending LUT 2 Sequence",
    "Keyword": "BlendingLUT2Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140D)",
    "Name": "Blending LUT 2 Transfer Function",
    "Keyword": "BlendingLUT2TransferFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140E)",
    "Name": "Data Path ID",
    "Keyword": "DataPathID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140F)",
    "Name": "RGB LUT Transfer Function",
    "Keyword": "RGBLUTTransferFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1410)",
    "Name": "Alpha LUT Transfer Function",
    "Keyword": "AlphaLUTTransferFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2000)",
    "Name": "ICC Profile",
    "Keyword": "ICCProfile",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2110)",
    "Name": "Lossy Image Compression",
    "Keyword": "LossyImageCompression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2112)",
    "Name": "Lossy Image Compression Ratio",
    "Keyword": "LossyImageCompressionRatio",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,2114)",
    "Name": "Lossy Image Compression Method",
    "Keyword": "LossyImageCompressionMethod",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,3000)",
    "Name": "Modality LUT Sequence",
    "Keyword": "ModalityLUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3002)",
    "Name": "LUT Descriptor",
    "Keyword": "LUTDescriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,3003)",
    "Name": "LUT Explanation",
    "Keyword": "LUTExplanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3004)",
    "Name": "Modality LUT Type",
    "Keyword": "ModalityLUTType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3006)",
    "Name": "LUT Data",
    "Keyword": "LUTData",
    "VR": "US or OW",
    "VM": "1-n or 1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3010)",
    "Name": "VOI LUT Sequence",
    "Keyword": "VOILUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3110)",
    "Name": "Softcopy VOI LUT Sequence",
    "Keyword": "SoftcopyVOILUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,4000)",
    "Name": "Image Presentation Comments",
    "Keyword": "ImagePresentationComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,5000)",
    "Name": "Bi-Plane Acquisition Sequence",
    "Keyword": "BiPlaneAcquisitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,6010)",
    "Name": "Representative Frame Number",
    "Keyword": "RepresentativeFrameNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6020)",
    "Name": "Frame Numbers of Interest (FOI)",
    "Keyword": "FrameNumbersOfInterest",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6022)",
    "Name": "Frame of Interest Description",
    "Keyword": "FrameOfInterestDescription",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6023)",
    "Name": "Frame of Interest Type",
    "Keyword": "FrameOfInterestType",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6030)",
    "Name": "Mask Pointer(s)",
    "Keyword": "MaskPointers",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,6040)",
    "Name": "R Wave Pointer",
    "Keyword": "RWavePointer",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6100)",
    "Name": "Mask Subtraction Sequence",
    "Keyword": "MaskSubtractionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6101)",
    "Name": "Mask Operation",
    "Keyword": "MaskOperation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6102)",
    "Name": "Applicable Frame Range",
    "Keyword": "ApplicableFrameRange",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6110)",
    "Name": "Mask Frame Numbers",
    "Keyword": "MaskFrameNumbers",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6112)",
    "Name": "Contrast Frame Averaging",
    "Keyword": "ContrastFrameAveraging",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6114)",
    "Name": "Mask Sub-pixel Shift",
    "Keyword": "MaskSubPixelShift",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,6120)",
    "Name": "TID Offset",
    "Keyword": "TIDOffset",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6190)",
    "Name": "Mask Operation Explanation",
    "Keyword": "MaskOperationExplanation",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,7FE0)",
    "Name": "Pixel Data Provider URL",
    "Keyword": "PixelDataProviderURL",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9001)",
    "Name": "Data Point Rows",
    "Keyword": "DataPointRows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9002)",
    "Name": "Data Point Columns",
    "Keyword": "DataPointColumns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9003)",
    "Name": "Signal Domain Columns",
    "Keyword": "SignalDomainColumns",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9099)",
    "Name": "Largest Monochrome Pixel Value",
    "Keyword": "LargestMonochromePixelValue",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,9108)",
    "Name": "Data Representation",
    "Keyword": "DataRepresentation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9110)",
    "Name": "Pixel Measures Sequence",
    "Keyword": "PixelMeasuresSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9132)",
    "Name": "Frame VOI LUT Sequence",
    "Keyword": "FrameVOILUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9145)",
    "Name": "Pixel Value Transformation Sequence",
    "Keyword": "PixelValueTransformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9235)",
    "Name": "Signal Domain Rows",
    "Keyword": "SignalDomainRows",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9411)",
    "Name": "Display Filter Percentage",
    "Keyword": "DisplayFilterPercentage",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9415)",
    "Name": "Frame Pixel Shift Sequence",
    "Keyword": "FramePixelShiftSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9416)",
    "Name": "Subtraction Item ID",
    "Keyword": "SubtractionItemID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9422)",
    "Name": "Pixel Intensity Relationship LUT Sequence",
    "Keyword": "PixelIntensityRelationshipLUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9443)",
    "Name": "Frame Pixel Data Properties Sequence",
    "Keyword": "FramePixelDataPropertiesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9444)",
    "Name": "Geometrical Properties",
    "Keyword": "GeometricalProperties",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9445)",
    "Name": "Geometric Maximum Distortion",
    "Keyword": "GeometricMaximumDistortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9446)",
    "Name": "Image Processing Applied",
    "Keyword": "ImageProcessingApplied",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9454)",
    "Name": "Mask Selection Mode",
    "Keyword": "MaskSelectionMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9474)",
    "Name": "LUT Function",
    "Keyword": "LUTFunction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9478)",
    "Name": "Mask Visibility Percentage",
    "Keyword": "MaskVisibilityPercentage",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9501)",
    "Name": "Pixel Shift Sequence",
    "Keyword": "PixelShiftSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9502)",
    "Name": "Region Pixel Shift Sequence",
    "Keyword": "RegionPixelShiftSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9503)",
    "Name": "Vertices of the Region",
    "Keyword": "VerticesOfTheRegion",
    "VR": "SS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9505)",
    "Name": "Multi-frame Presentation Sequence",
    "Keyword": "MultiFramePresentationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9506)",
    "Name": "Pixel Shift Frame Range",
    "Keyword": "PixelShiftFrameRange",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9507)",
    "Name": "LUT Frame Range",
    "Keyword": "LUTFrameRange",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9520)",
    "Name": "Image to Equipment Mapping Matrix",
    "Keyword": "ImageToEquipmentMappingMatrix",
    "VR": "DS",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0028,9537)",
    "Name": "Equipment Coordinate System Identification",
    "Keyword": "EquipmentCoordinateSystemIdentification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,000A)",
    "Name": "Study Status ID",
    "Keyword": "StudyStatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,000C)",
    "Name": "Study Priority ID",
    "Keyword": "StudyPriorityID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0012)",
    "Name": "Study ID Issuer",
    "Keyword": "StudyIDIssuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0032)",
    "Name": "Study Verified Date",
    "Keyword": "StudyVerifiedDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0033)",
    "Name": "Study Verified Time",
    "Keyword": "StudyVerifiedTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0034)",
    "Name": "Study Read Date",
    "Keyword": "StudyReadDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0035)",
    "Name": "Study Read Time",
    "Keyword": "StudyReadTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1000)",
    "Name": "Scheduled Study Start Date",
    "Keyword": "ScheduledStudyStartDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1001)",
    "Name": "Scheduled Study Start Time",
    "Keyword": "ScheduledStudyStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1010)",
    "Name": "Scheduled Study Stop Date",
    "Keyword": "ScheduledStudyStopDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1011)",
    "Name": "Scheduled Study Stop Time",
    "Keyword": "ScheduledStudyStopTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1020)",
    "Name": "Scheduled Study Location",
    "Keyword": "ScheduledStudyLocation",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1021)",
    "Name": "Scheduled Study Location AE Title",
    "Keyword": "ScheduledStudyLocationAETitle",
    "VR": "AE",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1030)",
    "Name": "Reason for Study",
    "Keyword": "ReasonForStudy",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1031)",
    "Name": "Requesting Physician Identification Sequence",
    "Keyword": "RequestingPhysicianIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1032)",
    "Name": "Requesting Physician",
    "Keyword": "RequestingPhysician",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1033)",
    "Name": "Requesting Service",
    "Keyword": "RequestingService",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1034)",
    "Name": "Requesting Service Code Sequence",
    "Keyword": "RequestingServiceCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1040)",
    "Name": "Study Arrival Date",
    "Keyword": "StudyArrivalDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1041)",
    "Name": "Study Arrival Time",
    "Keyword": "StudyArrivalTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1050)",
    "Name": "Study Completion Date",
    "Keyword": "StudyCompletionDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1051)",
    "Name": "Study Completion Time",
    "Keyword": "StudyCompletionTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1055)",
    "Name": "Study Component Status ID",
    "Keyword": "StudyComponentStatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1060)",
    "Name": "Requested Procedure Description",
    "Keyword": "RequestedProcedureDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1064)",
    "Name": "Requested Procedure Code Sequence",
    "Keyword": "RequestedProcedureCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1070)",
    "Name": "Requested Contrast Agent",
    "Keyword": "RequestedContrastAgent",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,4000)",
    "Name": "Study Comments",
    "Keyword": "StudyComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0004)",
    "Name": "Referenced Patient Alias Sequence",
    "Keyword": "ReferencedPatientAliasSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0008)",
    "Name": "Visit Status ID",
    "Keyword": "VisitStatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0010)",
    "Name": "Admission ID",
    "Keyword": "AdmissionID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0011)",
    "Name": "Issuer of Admission ID",
    "Keyword": "IssuerOfAdmissionID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0014)",
    "Name": "Issuer of Admission ID Sequence",
    "Keyword": "IssuerOfAdmissionIDSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0016)",
    "Name": "Route of Admissions",
    "Keyword": "RouteOfAdmissions",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,001A)",
    "Name": "Scheduled Admission Date",
    "Keyword": "ScheduledAdmissionDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001B)",
    "Name": "Scheduled Admission Time",
    "Keyword": "ScheduledAdmissionTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001C)",
    "Name": "Scheduled Discharge Date",
    "Keyword": "ScheduledDischargeDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001D)",
    "Name": "Scheduled Discharge Time",
    "Keyword": "ScheduledDischargeTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001E)",
    "Name": "Scheduled Patient Institution Residence",
    "Keyword": "ScheduledPatientInstitutionResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0020)",
    "Name": "Admitting Date",
    "Keyword": "AdmittingDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0021)",
    "Name": "Admitting Time",
    "Keyword": "AdmittingTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0030)",
    "Name": "Discharge Date",
    "Keyword": "DischargeDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0032)",
    "Name": "Discharge Time",
    "Keyword": "DischargeTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0040)",
    "Name": "Discharge Diagnosis Description",
    "Keyword": "DischargeDiagnosisDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0044)",
    "Name": "Discharge Diagnosis Code Sequence",
    "Keyword": "DischargeDiagnosisCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0050)",
    "Name": "Special Needs",
    "Keyword": "SpecialNeeds",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0060)",
    "Name": "Service Episode ID",
    "Keyword": "ServiceEpisodeID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0061)",
    "Name": "Issuer of Service Episode ID",
    "Keyword": "IssuerOfServiceEpisodeID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0062)",
    "Name": "Service Episode Description",
    "Keyword": "ServiceEpisodeDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0064)",
    "Name": "Issuer of Service Episode ID Sequence",
    "Keyword": "IssuerOfServiceEpisodeIDSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0100)",
    "Name": "Pertinent Documents Sequence",
    "Keyword": "PertinentDocumentsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0300)",
    "Name": "Current Patient Location",
    "Keyword": "CurrentPatientLocation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0400)",
    "Name": "Patient's Institution Residence",
    "Keyword": "PatientInstitutionResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0500)",
    "Name": "Patient State",
    "Keyword": "PatientState",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0502)",
    "Name": "Patient Clinical Trial Participation Sequence",
    "Keyword": "PatientClinicalTrialParticipationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,4000)",
    "Name": "Visit Comments",
    "Keyword": "VisitComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0004)",
    "Name": "Waveform Originality",
    "Keyword": "WaveformOriginality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0005)",
    "Name": "Number of Waveform Channels",
    "Keyword": "NumberOfWaveformChannels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0010)",
    "Name": "Number of Waveform Samples",
    "Keyword": "NumberOfWaveformSamples",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,001A)",
    "Name": "Sampling Frequency",
    "Keyword": "SamplingFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0020)",
    "Name": "Multiplex Group Label",
    "Keyword": "MultiplexGroupLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0200)",
    "Name": "Channel Definition Sequence",
    "Keyword": "ChannelDefinitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0202)",
    "Name": "Waveform Channel Number",
    "Keyword": "WaveformChannelNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0203)",
    "Name": "Channel Label",
    "Keyword": "ChannelLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0205)",
    "Name": "Channel Status",
    "Keyword": "ChannelStatus",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(003A,0208)",
    "Name": "Channel Source Sequence",
    "Keyword": "ChannelSourceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0209)",
    "Name": "Channel Source Modifiers Sequence",
    "Keyword": "ChannelSourceModifiersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,020A)",
    "Name": "Source Waveform Sequence",
    "Keyword": "SourceWaveformSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,020C)",
    "Name": "Channel Derivation Description",
    "Keyword": "ChannelDerivationDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0210)",
    "Name": "Channel Sensitivity",
    "Keyword": "ChannelSensitivity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0211)",
    "Name": "Channel Sensitivity Units Sequence",
    "Keyword": "ChannelSensitivityUnitsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0212)",
    "Name": "Channel Sensitivity Correction Factor",
    "Keyword": "ChannelSensitivityCorrectionFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0213)",
    "Name": "Channel Baseline",
    "Keyword": "ChannelBaseline",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0214)",
    "Name": "Channel Time Skew",
    "Keyword": "ChannelTimeSkew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0215)",
    "Name": "Channel Sample Skew",
    "Keyword": "ChannelSampleSkew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0218)",
    "Name": "Channel Offset",
    "Keyword": "ChannelOffset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,021A)",
    "Name": "Waveform Bits Stored",
    "Keyword": "WaveformBitsStored",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0220)",
    "Name": "Filter Low Frequency",
    "Keyword": "FilterLowFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0221)",
    "Name": "Filter High Frequency",
    "Keyword": "FilterHighFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0222)",
    "Name": "Notch Filter Frequency",
    "Keyword": "NotchFilterFrequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0223)",
    "Name": "Notch Filter Bandwidth",
    "Keyword": "NotchFilterBandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0230)",
    "Name": "Waveform Data Display Scale",
    "Keyword": "WaveformDataDisplayScale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0231)",
    "Name": "Waveform Display Background CIELab Value",
    "Keyword": "WaveformDisplayBackgroundCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(003A,0240)",
    "Name": "Waveform Presentation Group Sequence",
    "Keyword": "WaveformPresentationGroupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0241)",
    "Name": "Presentation Group Number",
    "Keyword": "PresentationGroupNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0242)",
    "Name": "Channel Display Sequence",
    "Keyword": "ChannelDisplaySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0244)",
    "Name": "Channel Recommended Display CIELab Value",
    "Keyword": "ChannelRecommendedDisplayCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(003A,0245)",
    "Name": "Channel Position",
    "Keyword": "ChannelPosition",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0246)",
    "Name": "Display Shading Flag",
    "Keyword": "DisplayShadingFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0247)",
    "Name": "Fractional Channel Display Scale",
    "Keyword": "FractionalChannelDisplayScale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0248)",
    "Name": "Absolute Channel Display Scale",
    "Keyword": "AbsoluteChannelDisplayScale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0300)",
    "Name": "Multiplexed Audio Channels Description Code Sequence",
    "Keyword": "MultiplexedAudioChannelsDescriptionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0301)",
    "Name": "Channel Identification Code",
    "Keyword": "ChannelIdentificationCode",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0302)",
    "Name": "Channel Mode",
    "Keyword": "ChannelMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0001)",
    "Name": "Scheduled Station AE Title",
    "Keyword": "ScheduledStationAETitle",
    "VR": "AE",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,0002)",
    "Name": "Scheduled Procedure Step Start Date",
    "Keyword": "ScheduledProcedureStepStartDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0003)",
    "Name": "Scheduled Procedure Step Start Time",
    "Keyword": "ScheduledProcedureStepStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0004)",
    "Name": "Scheduled Procedure Step End Date",
    "Keyword": "ScheduledProcedureStepEndDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0005)",
    "Name": "Scheduled Procedure Step End Time",
    "Keyword": "ScheduledProcedureStepEndTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0006)",
    "Name": "Scheduled Performing Physician's Name",
    "Keyword": "ScheduledPerformingPhysicianName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0007)",
    "Name": "Scheduled Procedure Step Description",
    "Keyword": "ScheduledProcedureStepDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0008)",
    "Name": "Scheduled Protocol Code Sequence",
    "Keyword": "ScheduledProtocolCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0009)",
    "Name": "Scheduled Procedure Step ID",
    "Keyword": "ScheduledProcedureStepID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,000A)",
    "Name": "Stage Code Sequence",
    "Keyword": "StageCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,000B)",
    "Name": "Scheduled Performing Physician Identification Sequence",
    "Keyword": "ScheduledPerformingPhysicianIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0010)",
    "Name": "Scheduled Station Name",
    "Keyword": "ScheduledStationName",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,0011)",
    "Name": "Scheduled Procedure Step Location",
    "Keyword": "ScheduledProcedureStepLocation",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0012)",
    "Name": "Pre-Medication",
    "Keyword": "PreMedication",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0020)",
    "Name": "Scheduled Procedure Step Status",
    "Keyword": "ScheduledProcedureStepStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0026)",
    "Name": "Order Placer Identifier Sequence",
    "Keyword": "OrderPlacerIdentifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0027)",
    "Name": "Order Filler Identifier Sequence",
    "Keyword": "OrderFillerIdentifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0031)",
    "Name": "Local Namespace Entity ID",
    "Keyword": "LocalNamespaceEntityID",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0032)",
    "Name": "Universal Entity ID",
    "Keyword": "UniversalEntityID",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0033)",
    "Name": "Universal Entity ID Type",
    "Keyword": "UniversalEntityIDType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0035)",
    "Name": "Identifier Type Code",
    "Keyword": "IdentifierTypeCode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0036)",
    "Name": "Assigning Facility Sequence",
    "Keyword": "AssigningFacilitySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0039)",
    "Name": "Assigning Jurisdiction Code Sequence",
    "Keyword": "AssigningJurisdictionCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,003A)",
    "Name": "Assigning Agency or Department Code Sequence",
    "Keyword": "AssigningAgencyOrDepartmentCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0100)",
    "Name": "Scheduled Procedure Step Sequence",
    "Keyword": "ScheduledProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0220)",
    "Name": "Referenced Non-Image Composite SOP Instance Sequence",
    "Keyword": "ReferencedNonImageCompositeSOPInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0241)",
    "Name": "Performed Station AE Title",
    "Keyword": "PerformedStationAETitle",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0242)",
    "Name": "Performed Station Name",
    "Keyword": "PerformedStationName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0243)",
    "Name": "Performed Location",
    "Keyword": "PerformedLocation",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0244)",
    "Name": "Performed Procedure Step Start Date",
    "Keyword": "PerformedProcedureStepStartDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0245)",
    "Name": "Performed Procedure Step Start Time",
    "Keyword": "PerformedProcedureStepStartTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0250)",
    "Name": "Performed Procedure Step End Date",
    "Keyword": "PerformedProcedureStepEndDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0251)",
    "Name": "Performed Procedure Step End Time",
    "Keyword": "PerformedProcedureStepEndTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0252)",
    "Name": "Performed Procedure Step Status",
    "Keyword": "PerformedProcedureStepStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0253)",
    "Name": "Performed Procedure Step ID",
    "Keyword": "PerformedProcedureStepID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0254)",
    "Name": "Performed Procedure Step Description",
    "Keyword": "PerformedProcedureStepDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0255)",
    "Name": "Performed Procedure Type Description",
    "Keyword": "PerformedProcedureTypeDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0260)",
    "Name": "Performed Protocol Code Sequence",
    "Keyword": "PerformedProtocolCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0261)",
    "Name": "Performed Protocol Type",
    "Keyword": "PerformedProtocolType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0270)",
    "Name": "Scheduled Step Attributes Sequence",
    "Keyword": "ScheduledStepAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0275)",
    "Name": "Request Attributes Sequence",
    "Keyword": "RequestAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0280)",
    "Name": "Comments on the Performed Procedure Step",
    "Keyword": "CommentsOnThePerformedProcedureStep",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0281)",
    "Name": "Performed Procedure Step Discontinuation Reason Code Sequence",
    "Keyword": "PerformedProcedureStepDiscontinuationReasonCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0293)",
    "Name": "Quantity Sequence",
    "Keyword": "QuantitySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0294)",
    "Name": "Quantity",
    "Keyword": "Quantity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0295)",
    "Name": "Measuring Units Sequence",
    "Keyword": "MeasuringUnitsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0296)",
    "Name": "Billing Item Sequence",
    "Keyword": "BillingItemSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0300)",
    "Name": "Total Time of Fluoroscopy",
    "Keyword": "TotalTimeOfFluoroscopy",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0301)",
    "Name": "Total Number of Exposures",
    "Keyword": "TotalNumberOfExposures",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0302)",
    "Name": "Entrance Dose",
    "Keyword": "EntranceDose",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0303)",
    "Name": "Exposed Area",
    "Keyword": "ExposedArea",
    "VR": "US",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0040,0306)",
    "Name": "Distance Source to Entrance",
    "Keyword": "DistanceSourceToEntrance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0307)",
    "Name": "Distance Source to Support",
    "Keyword": "DistanceSourceToSupport",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,030E)",
    "Name": "Exposure Dose Sequence",
    "Keyword": "ExposureDoseSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0310)",
    "Name": "Comments on Radiation Dose",
    "Keyword": "CommentsOnRadiationDose",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0312)",
    "Name": "X-Ray Output",
    "Keyword": "XRayOutput",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0314)",
    "Name": "Half Value Layer",
    "Keyword": "HalfValueLayer",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0316)",
    "Name": "Organ Dose",
    "Keyword": "OrganDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0318)",
    "Name": "Organ Exposed",
    "Keyword": "OrganExposed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0320)",
    "Name": "Billing Procedure Step Sequence",
    "Keyword": "BillingProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0321)",
    "Name": "Film Consumption Sequence",
    "Keyword": "FilmConsumptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0324)",
    "Name": "Billing Supplies and Devices Sequence",
    "Keyword": "BillingSuppliesAndDevicesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0330)",
    "Name": "Referenced Procedure Step Sequence",
    "Keyword": "ReferencedProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0340)",
    "Name": "Performed Series Sequence",
    "Keyword": "PerformedSeriesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0400)",
    "Name": "Comments on the Scheduled Procedure Step",
    "Keyword": "CommentsOnTheScheduledProcedureStep",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0440)",
    "Name": "Protocol Context Sequence",
    "Keyword": "ProtocolContextSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0441)",
    "Name": "Content Item Modifier Sequence",
    "Keyword": "ContentItemModifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0500)",
    "Name": "Scheduled Specimen Sequence",
    "Keyword": "ScheduledSpecimenSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,050A)",
    "Name": "Specimen Accession Number",
    "Keyword": "SpecimenAccessionNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0512)",
    "Name": "Container Identifier",
    "Keyword": "ContainerIdentifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0513)",
    "Name": "Issuer of the Container Identifier Sequence",
    "Keyword": "IssuerOfTheContainerIdentifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0515)",
    "Name": "Alternate Container Identifier Sequence",
    "Keyword": "AlternateContainerIdentifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0518)",
    "Name": "Container Type Code Sequence",
    "Keyword": "ContainerTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,051A)",
    "Name": "Container Description",
    "Keyword": "ContainerDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0520)",
    "Name": "Container Component Sequence",
    "Keyword": "ContainerComponentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0550)",
    "Name": "Specimen Sequence",
    "Keyword": "SpecimenSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0551)",
    "Name": "Specimen Identifier",
    "Keyword": "SpecimenIdentifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0552)",
    "Name": "Specimen Description Sequence (Trial)",
    "Keyword": "SpecimenDescriptionSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0553)",
    "Name": "Specimen Description (Trial)",
    "Keyword": "SpecimenDescriptionTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0554)",
    "Name": "Specimen UID",
    "Keyword": "SpecimenUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0555)",
    "Name": "Acquisition Context Sequence",
    "Keyword": "AcquisitionContextSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0556)",
    "Name": "Acquisition Context Description",
    "Keyword": "AcquisitionContextDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,059A)",
    "Name": "Specimen Type Code Sequence",
    "Keyword": "SpecimenTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0560)",
    "Name": "Specimen Description Sequence",
    "Keyword": "SpecimenDescriptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0562)",
    "Name": "Issuer of the Specimen Identifier Sequence",
    "Keyword": "IssuerOfTheSpecimenIdentifierSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0600)",
    "Name": "Specimen Short Description",
    "Keyword": "SpecimenShortDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0602)",
    "Name": "Specimen Detailed Description",
    "Keyword": "SpecimenDetailedDescription",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0610)",
    "Name": "Specimen Preparation Sequence",
    "Keyword": "SpecimenPreparationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0612)",
    "Name": "Specimen Preparation Step Content Item Sequence",
    "Keyword": "SpecimenPreparationStepContentItemSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0620)",
    "Name": "Specimen Localization Content Item Sequence",
    "Keyword": "SpecimenLocalizationContentItemSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,06FA)",
    "Name": "Slide Identifier",
    "Keyword": "SlideIdentifier",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,071A)",
    "Name": "Image Center Point Coordinates Sequence",
    "Keyword": "ImageCenterPointCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,072A)",
    "Name": "X Offset in Slide Coordinate System",
    "Keyword": "XOffsetInSlideCoordinateSystem",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,073A)",
    "Name": "Y Offset in Slide Coordinate System",
    "Keyword": "YOffsetInSlideCoordinateSystem",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,074A)",
    "Name": "Z Offset in Slide Coordinate System",
    "Keyword": "ZOffsetInSlideCoordinateSystem",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,08D8)",
    "Name": "Pixel Spacing Sequence",
    "Keyword": "PixelSpacingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,08DA)",
    "Name": "Coordinate System Axis Code Sequence",
    "Keyword": "CoordinateSystemAxisCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,08EA)",
    "Name": "Measurement Units Code Sequence",
    "Keyword": "MeasurementUnitsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,09F8)",
    "Name": "Vital Stain Code Sequence (Trial)",
    "Keyword": "VitalStainCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1001)",
    "Name": "Requested Procedure ID",
    "Keyword": "RequestedProcedureID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1002)",
    "Name": "Reason for the Requested Procedure",
    "Keyword": "ReasonForTheRequestedProcedure",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1003)",
    "Name": "Requested Procedure Priority",
    "Keyword": "RequestedProcedurePriority",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1004)",
    "Name": "Patient Transport Arrangements",
    "Keyword": "PatientTransportArrangements",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1005)",
    "Name": "Requested Procedure Location",
    "Keyword": "RequestedProcedureLocation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1006)",
    "Name": "Placer Order Number / Procedure",
    "Keyword": "PlacerOrderNumberProcedure",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1007)",
    "Name": "Filler Order Number / Procedure",
    "Keyword": "FillerOrderNumberProcedure",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1008)",
    "Name": "Confidentiality Code",
    "Keyword": "ConfidentialityCode",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1009)",
    "Name": "Reporting Priority",
    "Keyword": "ReportingPriority",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,100A)",
    "Name": "Reason for Requested Procedure Code Sequence",
    "Keyword": "ReasonForRequestedProcedureCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1010)",
    "Name": "Names of Intended Recipients of Results",
    "Keyword": "NamesOfIntendedRecipientsOfResults",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,1011)",
    "Name": "Intended Recipients of Results Identification Sequence",
    "Keyword": "IntendedRecipientsOfResultsIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1012)",
    "Name": "Reason For Performed Procedure Code Sequence",
    "Keyword": "ReasonForPerformedProcedureCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1060)",
    "Name": "Requested Procedure Description (Trial)",
    "Keyword": "RequestedProcedureDescriptionTrial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1101)",
    "Name": "Person Identification Code Sequence",
    "Keyword": "PersonIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1102)",
    "Name": "Person's Address",
    "Keyword": "PersonAddress",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1103)",
    "Name": "Person's Telephone Numbers",
    "Keyword": "PersonTelephoneNumbers",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,1400)",
    "Name": "Requested Procedure Comments",
    "Keyword": "RequestedProcedureComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2001)",
    "Name": "Reason for the Imaging Service Request",
    "Keyword": "ReasonForTheImagingServiceRequest",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2004)",
    "Name": "Issue Date of Imaging Service Request",
    "Keyword": "IssueDateOfImagingServiceRequest",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2005)",
    "Name": "Issue Time of Imaging Service Request",
    "Keyword": "IssueTimeOfImagingServiceRequest",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2006)",
    "Name": "Placer Order Number / Imaging Service Request (Retired)",
    "Keyword": "PlacerOrderNumberImagingServiceRequestRetired",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2007)",
    "Name": "Filler Order Number / Imaging Service Request (Retired)",
    "Keyword": "FillerOrderNumberImagingServiceRequestRetired",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2008)",
    "Name": "Order Entered By",
    "Keyword": "OrderEnteredBy",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2009)",
    "Name": "Order Enterer's Location",
    "Keyword": "OrderEntererLocation",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2010)",
    "Name": "Order Callback Phone Number",
    "Keyword": "OrderCallbackPhoneNumber",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2016)",
    "Name": "Placer Order Number / Imaging Service Request",
    "Keyword": "PlacerOrderNumberImagingServiceRequest",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2017)",
    "Name": "Filler Order Number / Imaging Service Request",
    "Keyword": "FillerOrderNumberImagingServiceRequest",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2400)",
    "Name": "Imaging Service Request Comments",
    "Keyword": "ImagingServiceRequestComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,3001)",
    "Name": "Confidentiality Constraint on Patient Data Description",
    "Keyword": "ConfidentialityConstraintOnPatientDataDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4001)",
    "Name": "General Purpose Scheduled Procedure Step Status",
    "Keyword": "GeneralPurposeScheduledProcedureStepStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4002)",
    "Name": "General Purpose Performed Procedure Step Status",
    "Keyword": "GeneralPurposePerformedProcedureStepStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4003)",
    "Name": "General Purpose Scheduled Procedure Step Priority",
    "Keyword": "GeneralPurposeScheduledProcedureStepPriority",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4004)",
    "Name": "Scheduled Processing Applications Code Sequence",
    "Keyword": "ScheduledProcessingApplicationsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4005)",
    "Name": "Scheduled Procedure Step Start DateTime",
    "Keyword": "ScheduledProcedureStepStartDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4006)",
    "Name": "Multiple Copies Flag",
    "Keyword": "MultipleCopiesFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4007)",
    "Name": "Performed Processing Applications Code Sequence",
    "Keyword": "PerformedProcessingApplicationsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4009)",
    "Name": "Human Performer Code Sequence",
    "Keyword": "HumanPerformerCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4010)",
    "Name": "Scheduled Procedure Step Modification DateTime",
    "Keyword": "ScheduledProcedureStepModificationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4011)",
    "Name": "Expected Completion DateTime",
    "Keyword": "ExpectedCompletionDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4015)",
    "Name": "Resulting General Purpose Performed Procedure Steps Sequence",
    "Keyword": "ResultingGeneralPurposePerformedProcedureStepsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4016)",
    "Name": "Referenced General Purpose Scheduled Procedure Step Sequence",
    "Keyword": "ReferencedGeneralPurposeScheduledProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4018)",
    "Name": "Scheduled Workitem Code Sequence",
    "Keyword": "ScheduledWorkitemCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4019)",
    "Name": "Performed Workitem Code Sequence",
    "Keyword": "PerformedWorkitemCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4020)",
    "Name": "Input Availability Flag",
    "Keyword": "InputAvailabilityFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4021)",
    "Name": "Input Information Sequence",
    "Keyword": "InputInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4022)",
    "Name": "Relevant Information Sequence",
    "Keyword": "RelevantInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4023)",
    "Name": "Referenced General Purpose Scheduled Procedure Step Transaction UID",
    "Keyword": "ReferencedGeneralPurposeScheduledProcedureStepTransactionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4025)",
    "Name": "Scheduled Station Name Code Sequence",
    "Keyword": "ScheduledStationNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4026)",
    "Name": "Scheduled Station Class Code Sequence",
    "Keyword": "ScheduledStationClassCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4027)",
    "Name": "Scheduled Station Geographic Location Code Sequence",
    "Keyword": "ScheduledStationGeographicLocationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4028)",
    "Name": "Performed Station Name Code Sequence",
    "Keyword": "PerformedStationNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4029)",
    "Name": "Performed Station Class Code Sequence",
    "Keyword": "PerformedStationClassCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4030)",
    "Name": "Performed Station Geographic Location Code Sequence",
    "Keyword": "PerformedStationGeographicLocationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4031)",
    "Name": "Requested Subsequent Workitem Code Sequence",
    "Keyword": "RequestedSubsequentWorkitemCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4032)",
    "Name": "Non-DICOM Output Code Sequence",
    "Keyword": "NonDICOMOutputCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4033)",
    "Name": "Output Information Sequence",
    "Keyword": "OutputInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4034)",
    "Name": "Scheduled Human Performers Sequence",
    "Keyword": "ScheduledHumanPerformersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4035)",
    "Name": "Actual Human Performers Sequence",
    "Keyword": "ActualHumanPerformersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4036)",
    "Name": "Human Performer's Organization",
    "Keyword": "HumanPerformerOrganization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4037)",
    "Name": "Human Performer's Name",
    "Keyword": "HumanPerformerName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4040)",
    "Name": "Raw Data Handling",
    "Keyword": "RawDataHandling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4041)",
    "Name": "Input Readiness State",
    "Keyword": "InputReadinessState",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4050)",
    "Name": "Performed Procedure Step Start DateTime",
    "Keyword": "PerformedProcedureStepStartDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4051)",
    "Name": "Performed Procedure Step End DateTime",
    "Keyword": "PerformedProcedureStepEndDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4052)",
    "Name": "Procedure Step Cancellation DateTime",
    "Keyword": "ProcedureStepCancellationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,8302)",
    "Name": "Entrance Dose in mGy",
    "Keyword": "EntranceDoseInmGy",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9094)",
    "Name": "Referenced Image Real World Value Mapping Sequence",
    "Keyword": "ReferencedImageRealWorldValueMappingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9096)",
    "Name": "Real World Value Mapping Sequence",
    "Keyword": "RealWorldValueMappingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9098)",
    "Name": "Pixel Value Mapping Code Sequence",
    "Keyword": "PixelValueMappingCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9210)",
    "Name": "LUT Label",
    "Keyword": "LUTLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9211)",
    "Name": "Real World Value Last Value Mapped",
    "Keyword": "RealWorldValueLastValueMapped",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9212)",
    "Name": "Real World Value LUT Data",
    "Keyword": "RealWorldValueLUTData",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,9216)",
    "Name": "Real World Value First Value Mapped",
    "Keyword": "RealWorldValueFirstValueMapped",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9224)",
    "Name": "Real World Value Intercept",
    "Keyword": "RealWorldValueIntercept",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9225)",
    "Name": "Real World Value Slope",
    "Keyword": "RealWorldValueSlope",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A007)",
    "Name": "Findings Flag (Trial)",
    "Keyword": "FindingsFlagTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A010)",
    "Name": "Relationship Type",
    "Keyword": "RelationshipType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A020)",
    "Name": "Findings Sequence (Trial)",
    "Keyword": "FindingsSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A021)",
    "Name": "Findings Group UID (Trial)",
    "Keyword": "FindingsGroupUIDTrial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A022)",
    "Name": "Referenced Findings Group UID (Trial)",
    "Keyword": "ReferencedFindingsGroupUIDTrial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A023)",
    "Name": "Findings Group Recording Date (Trial)",
    "Keyword": "FindingsGroupRecordingDateTrial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A024)",
    "Name": "Findings Group Recording Time (Trial)",
    "Keyword": "FindingsGroupRecordingTimeTrial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A026)",
    "Name": "Findings Source Category Code Sequence (Trial)",
    "Keyword": "FindingsSourceCategoryCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A027)",
    "Name": "Verifying Organization",
    "Keyword": "VerifyingOrganization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A028)",
    "Name": "Documenting Organization Identifier Code Sequence (Trial)",
    "Keyword": "DocumentingOrganizationIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A030)",
    "Name": "Verification DateTime",
    "Keyword": "VerificationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A032)",
    "Name": "Observation DateTime",
    "Keyword": "ObservationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A040)",
    "Name": "Value Type",
    "Keyword": "ValueType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A043)",
    "Name": "Concept Name Code Sequence",
    "Keyword": "ConceptNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A047)",
    "Name": "Measurement Precision Description (Trial)",
    "Keyword": "MeasurementPrecisionDescriptionTrial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A050)",
    "Name": "Continuity Of Content",
    "Keyword": "ContinuityOfContent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A057)",
    "Name": "Urgency or Priority Alerts (Trial)",
    "Keyword": "UrgencyOrPriorityAlertsTrial",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A060)",
    "Name": "Sequencing Indicator (Trial)",
    "Keyword": "SequencingIndicatorTrial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A066)",
    "Name": "Document Identifier Code Sequence (Trial)",
    "Keyword": "DocumentIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A067)",
    "Name": "Document Author (Trial)",
    "Keyword": "DocumentAuthorTrial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A068)",
    "Name": "Document Author Identifier Code Sequence (Trial)",
    "Keyword": "DocumentAuthorIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A070)",
    "Name": "Identifier Code Sequence (Trial)",
    "Keyword": "IdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A073)",
    "Name": "Verifying Observer Sequence",
    "Keyword": "VerifyingObserverSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A074)",
    "Name": "Object Binary Identifier (Trial)",
    "Keyword": "ObjectBinaryIdentifierTrial",
    "VR": "OB",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A075)",
    "Name": "Verifying Observer Name",
    "Keyword": "VerifyingObserverName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A076)",
    "Name": "Documenting Observer Identifier Code Sequence (Trial)",
    "Keyword": "DocumentingObserverIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A078)",
    "Name": "Author Observer Sequence",
    "Keyword": "AuthorObserverSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A07A)",
    "Name": "Participant Sequence",
    "Keyword": "ParticipantSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A07C)",
    "Name": "Custodial Organization Sequence",
    "Keyword": "CustodialOrganizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A080)",
    "Name": "Participation Type",
    "Keyword": "ParticipationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A082)",
    "Name": "Participation DateTime",
    "Keyword": "ParticipationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A084)",
    "Name": "Observer Type",
    "Keyword": "ObserverType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A085)",
    "Name": "Procedure Identifier Code Sequence (Trial)",
    "Keyword": "ProcedureIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A088)",
    "Name": "Verifying Observer Identification Code Sequence",
    "Keyword": "VerifyingObserverIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A089)",
    "Name": "Object Directory Binary Identifier (Trial)",
    "Keyword": "ObjectDirectoryBinaryIdentifierTrial",
    "VR": "OB",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A090)",
    "Name": "Equivalent CDA Document Sequence",
    "Keyword": "EquivalentCDADocumentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A0B0)",
    "Name": "Referenced Waveform Channels",
    "Keyword": "ReferencedWaveformChannels",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A110)",
    "Name": "Date of Document or Verbal Transaction (Trial)",
    "Keyword": "DateOfDocumentOrVerbalTransactionTrial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A112)",
    "Name": "Time of Document Creation or Verbal Transaction (Trial)",
    "Keyword": "TimeOfDocumentCreationOrVerbalTransactionTrial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A120)",
    "Name": "DateTime",
    "Keyword": "DateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A121)",
    "Name": "Date",
    "Keyword": "Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A122)",
    "Name": "Time",
    "Keyword": "Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A123)",
    "Name": "Person Name",
    "Keyword": "PersonName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A124)",
    "Name": "UID",
    "Keyword": "UID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A125)",
    "Name": "Report Status ID (Trial)",
    "Keyword": "ReportStatusIDTrial",
    "VR": "CS",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A130)",
    "Name": "Temporal Range Type",
    "Keyword": "TemporalRangeType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A132)",
    "Name": "Referenced Sample Positions",
    "Keyword": "ReferencedSamplePositions",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A136)",
    "Name": "Referenced Frame Numbers",
    "Keyword": "ReferencedFrameNumbers",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A138)",
    "Name": "Referenced Time Offsets",
    "Keyword": "ReferencedTimeOffsets",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A13A)",
    "Name": "Referenced DateTime",
    "Keyword": "ReferencedDateTime",
    "VR": "DT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A160)",
    "Name": "Text Value",
    "Keyword": "TextValue",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A161)",
    "Name": "Floating Point Value",
    "Keyword": "FloatingPointValue",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A162)",
    "Name": "Rational Numerator Value",
    "Keyword": "RationalNumeratorValue",
    "VR": "SL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A163)",
    "Name": "Rational Denominator Value",
    "Keyword": "RationalDenominatorValue",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A167)",
    "Name": "Observation Category Code Sequence (Trial)",
    "Keyword": "ObservationCategoryCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A168)",
    "Name": "Concept Code Sequence",
    "Keyword": "ConceptCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A16A)",
    "Name": "Bibliographic Citation (Trial)",
    "Keyword": "BibliographicCitationTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A170)",
    "Name": "Purpose of Reference Code Sequence",
    "Keyword": "PurposeOfReferenceCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A171)",
    "Name": "Observation UID",
    "Keyword": "ObservationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A172)",
    "Name": "Referenced Observation UID (Trial)",
    "Keyword": "ReferencedObservationUIDTrial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A173)",
    "Name": "Referenced Observation Class (Trial)",
    "Keyword": "ReferencedObservationClassTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A174)",
    "Name": "Referenced Object Observation Class (Trial)",
    "Keyword": "ReferencedObjectObservationClassTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A180)",
    "Name": "Annotation Group Number",
    "Keyword": "AnnotationGroupNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A192)",
    "Name": "Observation Date (Trial)",
    "Keyword": "ObservationDateTrial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A193)",
    "Name": "Observation Time (Trial)",
    "Keyword": "ObservationTimeTrial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A194)",
    "Name": "Measurement Automation (Trial)",
    "Keyword": "MeasurementAutomationTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A195)",
    "Name": "Modifier Code Sequence",
    "Keyword": "ModifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A224)",
    "Name": "Identification Description (Trial)",
    "Keyword": "IdentificationDescriptionTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A290)",
    "Name": "Coordinates Set Geometric Type (Trial)",
    "Keyword": "CoordinatesSetGeometricTypeTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A296)",
    "Name": "Algorithm Code Sequence (Trial)",
    "Keyword": "AlgorithmCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A297)",
    "Name": "Algorithm Description (Trial)",
    "Keyword": "AlgorithmDescriptionTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A29A)",
    "Name": "Pixel Coordinates Set (Trial)",
    "Keyword": "PixelCoordinatesSetTrial",
    "VR": "SL",
    "VM": "2-2n",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A300)",
    "Name": "Measured Value Sequence",
    "Keyword": "MeasuredValueSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A301)",
    "Name": "Numeric Value Qualifier Code Sequence",
    "Keyword": "NumericValueQualifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A307)",
    "Name": "Current Observer (Trial)",
    "Keyword": "CurrentObserverTrial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A30A)",
    "Name": "Numeric Value",
    "Keyword": "NumericValue",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A313)",
    "Name": "Referenced Accession Sequence (Trial)",
    "Keyword": "ReferencedAccessionSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A33A)",
    "Name": "Report Status Comment (Trial)",
    "Keyword": "ReportStatusCommentTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A340)",
    "Name": "Procedure Context Sequence (Trial)",
    "Keyword": "ProcedureContextSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A352)",
    "Name": "Verbal Source (Trial)",
    "Keyword": "VerbalSourceTrial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A353)",
    "Name": "Address (Trial)",
    "Keyword": "AddressTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A354)",
    "Name": "Telephone Number (Trial)",
    "Keyword": "TelephoneNumberTrial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A358)",
    "Name": "Verbal Source Identifier Code Sequence (Trial)",
    "Keyword": "VerbalSourceIdentifierCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A360)",
    "Name": "Predecessor Documents Sequence",
    "Keyword": "PredecessorDocumentsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A370)",
    "Name": "Referenced Request Sequence",
    "Keyword": "ReferencedRequestSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A372)",
    "Name": "Performed Procedure Code Sequence",
    "Keyword": "PerformedProcedureCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A375)",
    "Name": "Current Requested Procedure Evidence Sequence",
    "Keyword": "CurrentRequestedProcedureEvidenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A380)",
    "Name": "Report Detail Sequence (Trial)",
    "Keyword": "ReportDetailSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A385)",
    "Name": "Pertinent Other Evidence Sequence",
    "Keyword": "PertinentOtherEvidenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A390)",
    "Name": "HL7 Structured Document Reference Sequence",
    "Keyword": "HL7StructuredDocumentReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A402)",
    "Name": "Observation Subject UID (Trial)",
    "Keyword": "ObservationSubjectUIDTrial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A403)",
    "Name": "Observation Subject Class (Trial)",
    "Keyword": "ObservationSubjectClassTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A404)",
    "Name": "Observation Subject Type Code Sequence (Trial)",
    "Keyword": "ObservationSubjectTypeCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A491)",
    "Name": "Completion Flag",
    "Keyword": "CompletionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A492)",
    "Name": "Completion Flag Description",
    "Keyword": "CompletionFlagDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A493)",
    "Name": "Verification Flag",
    "Keyword": "VerificationFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A494)",
    "Name": "Archive Requested",
    "Keyword": "ArchiveRequested",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A496)",
    "Name": "Preliminary Flag",
    "Keyword": "PreliminaryFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A504)",
    "Name": "Content Template Sequence",
    "Keyword": "ContentTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A525)",
    "Name": "Identical Documents Sequence",
    "Keyword": "IdenticalDocumentsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A600)",
    "Name": "Observation Subject Context Flag (Trial)",
    "Keyword": "ObservationSubjectContextFlagTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A601)",
    "Name": "Observer Context Flag (Trial)",
    "Keyword": "ObserverContextFlagTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A603)",
    "Name": "Procedure Context Flag (Trial)",
    "Keyword": "ProcedureContextFlagTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A730)",
    "Name": "Content Sequence",
    "Keyword": "ContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A731)",
    "Name": "Relationship Sequence (Trial)",
    "Keyword": "RelationshipSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A732)",
    "Name": "Relationship Type Code Sequence (Trial)",
    "Keyword": "RelationshipTypeCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A744)",
    "Name": "Language Code Sequence (Trial)",
    "Keyword": "LanguageCodeSequenceTrial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A992)",
    "Name": "Uniform Resource Locator (Trial)",
    "Keyword": "UniformResourceLocatorTrial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,B020)",
    "Name": "Waveform Annotation Sequence",
    "Keyword": "WaveformAnnotationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,DB00)",
    "Name": "Template Identifier",
    "Keyword": "TemplateIdentifier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,DB06)",
    "Name": "Template Version",
    "Keyword": "TemplateVersion",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB07)",
    "Name": "Template Local Version",
    "Keyword": "TemplateLocalVersion",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0B)",
    "Name": "Template Extension Flag",
    "Keyword": "TemplateExtensionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0C)",
    "Name": "Template Extension Organization UID",
    "Keyword": "TemplateExtensionOrganizationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0D)",
    "Name": "Template Extension Creator UID",
    "Keyword": "TemplateExtensionCreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB73)",
    "Name": "Referenced Content Item Identifier",
    "Keyword": "ReferencedContentItemIdentifier",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,E001)",
    "Name": "HL7 Instance Identifier",
    "Keyword": "HL7InstanceIdentifier",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E004)",
    "Name": "HL7 Document Effective Time",
    "Keyword": "HL7DocumentEffectiveTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E006)",
    "Name": "HL7 Document Type Code Sequence",
    "Keyword": "HL7DocumentTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E008)",
    "Name": "Document Class Code Sequence",
    "Keyword": "DocumentClassCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E010)",
    "Name": "Retrieve URI",
    "Keyword": "RetrieveURI",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E011)",
    "Name": "Retrieve Location UID",
    "Keyword": "RetrieveLocationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E020)",
    "Name": "Type of Instances",
    "Keyword": "TypeOfInstances",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E021)",
    "Name": "DICOM Retrieval Sequence",
    "Keyword": "DICOMRetrievalSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E022)",
    "Name": "DICOM Media Retrieval Sequence",
    "Keyword": "DICOMMediaRetrievalSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E023)",
    "Name": "WADO Retrieval Sequence",
    "Keyword": "WADORetrievalSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E024)",
    "Name": "XDS Retrieval Sequence",
    "Keyword": "XDSRetrievalSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E030)",
    "Name": "Repository Unique ID",
    "Keyword": "RepositoryUniqueID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E031)",
    "Name": "Home Community ID",
    "Keyword": "HomeCommunityID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0010)",
    "Name": "Document Title",
    "Keyword": "DocumentTitle",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0011)",
    "Name": "Encapsulated Document",
    "Keyword": "EncapsulatedDocument",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0012)",
    "Name": "MIME Type of Encapsulated Document",
    "Keyword": "MIMETypeOfEncapsulatedDocument",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0013)",
    "Name": "Source Instance Sequence",
    "Keyword": "SourceInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0014)",
    "Name": "List of MIME Types",
    "Keyword": "ListOfMIMETypes",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0044,0001)",
    "Name": "Product Package Identifier",
    "Keyword": "ProductPackageIdentifier",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0002)",
    "Name": "Substance Administration Approval",
    "Keyword": "SubstanceAdministrationApproval",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0003)",
    "Name": "Approval Status Further Description",
    "Keyword": "ApprovalStatusFurtherDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0004)",
    "Name": "Approval Status DateTime",
    "Keyword": "ApprovalStatusDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0007)",
    "Name": "Product Type Code Sequence",
    "Keyword": "ProductTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0008)",
    "Name": "Product Name",
    "Keyword": "ProductName",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0044,0009)",
    "Name": "Product Description",
    "Keyword": "ProductDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,000A)",
    "Name": "Product Lot Identifier",
    "Keyword": "ProductLotIdentifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,000B)",
    "Name": "Product Expiration DateTime",
    "Keyword": "ProductExpirationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0010)",
    "Name": "Substance Administration DateTime",
    "Keyword": "SubstanceAdministrationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0011)",
    "Name": "Substance Administration Notes",
    "Keyword": "SubstanceAdministrationNotes",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0012)",
    "Name": "Substance Administration Device ID",
    "Keyword": "SubstanceAdministrationDeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0013)",
    "Name": "Product Parameter Sequence",
    "Keyword": "ProductParameterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0019)",
    "Name": "Substance Administration Parameter Sequence",
    "Keyword": "SubstanceAdministrationParameterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0012)",
    "Name": "Lens Description",
    "Keyword": "LensDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0014)",
    "Name": "Right Lens Sequence",
    "Keyword": "RightLensSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0015)",
    "Name": "Left Lens Sequence",
    "Keyword": "LeftLensSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0016)",
    "Name": "Unspecified Laterality Lens Sequence",
    "Keyword": "UnspecifiedLateralityLensSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0018)",
    "Name": "Cylinder Sequence",
    "Keyword": "CylinderSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0028)",
    "Name": "Prism Sequence",
    "Keyword": "PrismSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0030)",
    "Name": "Horizontal Prism Power",
    "Keyword": "HorizontalPrismPower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0032)",
    "Name": "Horizontal Prism Base",
    "Keyword": "HorizontalPrismBase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0034)",
    "Name": "Vertical Prism Power",
    "Keyword": "VerticalPrismPower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0036)",
    "Name": "Vertical Prism Base",
    "Keyword": "VerticalPrismBase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0038)",
    "Name": "Lens Segment Type",
    "Keyword": "LensSegmentType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0040)",
    "Name": "Optical Transmittance",
    "Keyword": "OpticalTransmittance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0042)",
    "Name": "Channel Width",
    "Keyword": "ChannelWidth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0044)",
    "Name": "Pupil Size",
    "Keyword": "PupilSize",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0046)",
    "Name": "Corneal Size",
    "Keyword": "CornealSize",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0050)",
    "Name": "Autorefraction Right Eye Sequence",
    "Keyword": "AutorefractionRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0052)",
    "Name": "Autorefraction Left Eye Sequence",
    "Keyword": "AutorefractionLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0060)",
    "Name": "Distance Pupillary Distance",
    "Keyword": "DistancePupillaryDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0062)",
    "Name": "Near Pupillary Distance",
    "Keyword": "NearPupillaryDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0063)",
    "Name": "Intermediate Pupillary Distance",
    "Keyword": "IntermediatePupillaryDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0064)",
    "Name": "Other Pupillary Distance",
    "Keyword": "OtherPupillaryDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0070)",
    "Name": "Keratometry Right Eye Sequence",
    "Keyword": "KeratometryRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0071)",
    "Name": "Keratometry Left Eye Sequence",
    "Keyword": "KeratometryLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0074)",
    "Name": "Steep Keratometric Axis Sequence",
    "Keyword": "SteepKeratometricAxisSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0075)",
    "Name": "Radius of Curvature",
    "Keyword": "RadiusOfCurvature",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0076)",
    "Name": "Keratometric Power",
    "Keyword": "KeratometricPower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0077)",
    "Name": "Keratometric Axis",
    "Keyword": "KeratometricAxis",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0080)",
    "Name": "Flat Keratometric Axis Sequence",
    "Keyword": "FlatKeratometricAxisSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0092)",
    "Name": "Background Color",
    "Keyword": "BackgroundColor",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0094)",
    "Name": "Optotype",
    "Keyword": "Optotype",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0095)",
    "Name": "Optotype Presentation",
    "Keyword": "OptotypePresentation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0097)",
    "Name": "Subjective Refraction Right Eye Sequence",
    "Keyword": "SubjectiveRefractionRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0098)",
    "Name": "Subjective Refraction Left Eye Sequence",
    "Keyword": "SubjectiveRefractionLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0100)",
    "Name": "Add Near Sequence",
    "Keyword": "AddNearSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0101)",
    "Name": "Add Intermediate Sequence",
    "Keyword": "AddIntermediateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0102)",
    "Name": "Add Other Sequence",
    "Keyword": "AddOtherSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0104)",
    "Name": "Add Power",
    "Keyword": "AddPower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0106)",
    "Name": "Viewing Distance",
    "Keyword": "ViewingDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0121)",
    "Name": "Visual Acuity Type Code Sequence",
    "Keyword": "VisualAcuityTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0122)",
    "Name": "Visual Acuity Right Eye Sequence",
    "Keyword": "VisualAcuityRightEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0123)",
    "Name": "Visual Acuity Left Eye Sequence",
    "Keyword": "VisualAcuityLeftEyeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0124)",
    "Name": "Visual Acuity Both Eyes Open Sequence",
    "Keyword": "VisualAcuityBothEyesOpenSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0125)",
    "Name": "Viewing Distance Type",
    "Keyword": "ViewingDistanceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0135)",
    "Name": "Visual Acuity Modifiers",
    "Keyword": "VisualAcuityModifiers",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0137)",
    "Name": "Decimal Visual Acuity",
    "Keyword": "DecimalVisualAcuity",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0139)",
    "Name": "Optotype Detailed Definition",
    "Keyword": "OptotypeDetailedDefinition",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0145)",
    "Name": "Referenced Refractive Measurements Sequence",
    "Keyword": "ReferencedRefractiveMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0146)",
    "Name": "Sphere Power",
    "Keyword": "SpherePower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0147)",
    "Name": "Cylinder Power",
    "Keyword": "CylinderPower",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0201)",
    "Name": "Corneal Topography Surface",
    "Keyword": "CornealTopographySurface",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0202)",
    "Name": "Corneal Vertex Location",
    "Keyword": "CornealVertexLocation",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0203)",
    "Name": "Pupil Centroid X-Coordinate",
    "Keyword": "PupilCentroidXCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0204)",
    "Name": "Pupil Centroid Y-Coordinate",
    "Keyword": "PupilCentroidYCoordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0205)",
    "Name": "Equivalent Pupil Radius",
    "Keyword": "EquivalentPupilRadius",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0207)",
    "Name": "Corneal Topography Map Type Code Sequence",
    "Keyword": "CornealTopographyMapTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0208)",
    "Name": "Vertices of the Outline of Pupil",
    "Keyword": "VerticesOfTheOutlineOfPupil",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0046,0210)",
    "Name": "Corneal Topography Mapping Normals Sequence",
    "Keyword": "CornealTopographyMappingNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0211)",
    "Name": "Maximum Corneal Curvature Sequence",
    "Keyword": "MaximumCornealCurvatureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0212)",
    "Name": "Maximum Corneal Curvature",
    "Keyword": "MaximumCornealCurvature",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0213)",
    "Name": "Maximum Corneal Curvature Location",
    "Keyword": "MaximumCornealCurvatureLocation",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0215)",
    "Name": "Minimum Keratometric Sequence",
    "Keyword": "MinimumKeratometricSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0218)",
    "Name": "Simulated Keratometric Cylinder Sequence",
    "Keyword": "SimulatedKeratometricCylinderSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0220)",
    "Name": "Average Corneal Power",
    "Keyword": "AverageCornealPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0224)",
    "Name": "Corneal I-S Value",
    "Keyword": "CornealISValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0227)",
    "Name": "Analyzed Area",
    "Keyword": "AnalyzedArea",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0230)",
    "Name": "Surface Regularity Index",
    "Keyword": "SurfaceRegularityIndex",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0232)",
    "Name": "Surface Asymmetry Index",
    "Keyword": "SurfaceAsymmetryIndex",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0234)",
    "Name": "Corneal Eccentricity Index",
    "Keyword": "CornealEccentricityIndex",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0236)",
    "Name": "Keratoconus Prediction Index",
    "Keyword": "KeratoconusPredictionIndex",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0238)",
    "Name": "Decimal Potential Visual Acuity",
    "Keyword": "DecimalPotentialVisualAcuity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0242)",
    "Name": "Corneal Topography Map Quality Evaluation",
    "Keyword": "CornealTopographyMapQualityEvaluation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0244)",
    "Name": "Source Image Corneal Processed Data Sequence",
    "Keyword": "SourceImageCornealProcessedDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0247)",
    "Name": "Corneal Point Location",
    "Keyword": "CornealPointLocation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0046,0248)",
    "Name": "Corneal Point Estimated",
    "Keyword": "CornealPointEstimated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0249)",
    "Name": "Axial Power",
    "Keyword": "AxialPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0250)",
    "Name": "Tangential Power",
    "Keyword": "TangentialPower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0251)",
    "Name": "Refractive Power",
    "Keyword": "RefractivePower",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0252)",
    "Name": "Relative Elevation",
    "Keyword": "RelativeElevation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0253)",
    "Name": "Corneal Wavefront",
    "Keyword": "CornealWavefront",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0001)",
    "Name": "Imaged Volume Width",
    "Keyword": "ImagedVolumeWidth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0002)",
    "Name": "Imaged Volume Height",
    "Keyword": "ImagedVolumeHeight",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0003)",
    "Name": "Imaged Volume Depth",
    "Keyword": "ImagedVolumeDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0006)",
    "Name": "Total Pixel Matrix Columns",
    "Keyword": "TotalPixelMatrixColumns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0007)",
    "Name": "Total Pixel Matrix Rows",
    "Keyword": "TotalPixelMatrixRows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0008)",
    "Name": "Total Pixel Matrix Origin Sequence",
    "Keyword": "TotalPixelMatrixOriginSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0010)",
    "Name": "Specimen Label in Image",
    "Keyword": "SpecimenLabelInImage",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0011)",
    "Name": "Focus Method",
    "Keyword": "FocusMethod",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0012)",
    "Name": "Extended Depth of Field",
    "Keyword": "ExtendedDepthOfField",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0013)",
    "Name": "Number of Focal Planes",
    "Keyword": "NumberOfFocalPlanes",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0014)",
    "Name": "Distance Between Focal Planes",
    "Keyword": "DistanceBetweenFocalPlanes",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0015)",
    "Name": "Recommended Absent Pixel CIELab Value",
    "Keyword": "RecommendedAbsentPixelCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0048,0100)",
    "Name": "Illuminator Type Code Sequence",
    "Keyword": "IlluminatorTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0102)",
    "Name": "Image Orientation (Slide)",
    "Keyword": "ImageOrientationSlide",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0048,0105)",
    "Name": "Optical Path Sequence",
    "Keyword": "OpticalPathSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0106)",
    "Name": "Optical Path Identifier",
    "Keyword": "OpticalPathIdentifier",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0107)",
    "Name": "Optical Path Description",
    "Keyword": "OpticalPathDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0108)",
    "Name": "Illumination Color Code Sequence",
    "Keyword": "IlluminationColorCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0110)",
    "Name": "Specimen Reference Sequence",
    "Keyword": "SpecimenReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0111)",
    "Name": "Condenser Lens Power",
    "Keyword": "CondenserLensPower",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0112)",
    "Name": "Objective Lens Power",
    "Keyword": "ObjectiveLensPower",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0113)",
    "Name": "Objective Lens Numerical Aperture",
    "Keyword": "ObjectiveLensNumericalAperture",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0120)",
    "Name": "Palette Color Lookup Table Sequence",
    "Keyword": "PaletteColorLookupTableSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0200)",
    "Name": "Referenced Image Navigation Sequence",
    "Keyword": "ReferencedImageNavigationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0201)",
    "Name": "Top Left Hand Corner of Localizer Area",
    "Keyword": "TopLeftHandCornerOfLocalizerArea",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0048,0202)",
    "Name": "Bottom Right Hand Corner of Localizer Area",
    "Keyword": "BottomRightHandCornerOfLocalizerArea",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0048,0207)",
    "Name": "Optical Path Identification Sequence",
    "Keyword": "OpticalPathIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021A)",
    "Name": "Plane Position (Slide) Sequence",
    "Keyword": "PlanePositionSlideSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021E)",
    "Name": "Column Position In Total Image Pixel Matrix",
    "Keyword": "ColumnPositionInTotalImagePixelMatrix",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021F)",
    "Name": "Row Position In Total Image Pixel Matrix",
    "Keyword": "RowPositionInTotalImagePixelMatrix",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0301)",
    "Name": "Pixel Origin Interpretation",
    "Keyword": "PixelOriginInterpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0004)",
    "Name": "Calibration Image",
    "Keyword": "CalibrationImage",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0010)",
    "Name": "Device Sequence",
    "Keyword": "DeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0012)",
    "Name": "Container Component Type Code Sequence",
    "Keyword": "ContainerComponentTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0013)",
    "Name": "Container Component Thickness",
    "Keyword": "ContainerComponentThickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0014)",
    "Name": "Device Length",
    "Keyword": "DeviceLength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0015)",
    "Name": "Container Component Width",
    "Keyword": "ContainerComponentWidth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0016)",
    "Name": "Device Diameter",
    "Keyword": "DeviceDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0017)",
    "Name": "Device Diameter Units",
    "Keyword": "DeviceDiameterUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0018)",
    "Name": "Device Volume",
    "Keyword": "DeviceVolume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0019)",
    "Name": "Inter-Marker Distance",
    "Keyword": "InterMarkerDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001A)",
    "Name": "Container Component Material",
    "Keyword": "ContainerComponentMaterial",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001B)",
    "Name": "Container Component ID",
    "Keyword": "ContainerComponentID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001C)",
    "Name": "Container Component Length",
    "Keyword": "ContainerComponentLength",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001D)",
    "Name": "Container Component Diameter",
    "Keyword": "ContainerComponentDiameter",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001E)",
    "Name": "Container Component Description",
    "Keyword": "ContainerComponentDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0020)",
    "Name": "Device Description",
    "Keyword": "DeviceDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0001)",
    "Name": "Contrast/Bolus Ingredient Percent by Volume",
    "Keyword": "ContrastBolusIngredientPercentByVolume",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0002)",
    "Name": "OCT Focal Distance",
    "Keyword": "OCTFocalDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0003)",
    "Name": "Beam Spot Size",
    "Keyword": "BeamSpotSize",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0004)",
    "Name": "Effective Refractive Index",
    "Keyword": "EffectiveRefractiveIndex",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0006)",
    "Name": "OCT Acquisition Domain",
    "Keyword": "OCTAcquisitionDomain",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0007)",
    "Name": "OCT Optical Center Wavelength",
    "Keyword": "OCTOpticalCenterWavelength",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0008)",
    "Name": "Axial Resolution",
    "Keyword": "AxialResolution",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0009)",
    "Name": "Ranging Depth",
    "Keyword": "RangingDepth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0011)",
    "Name": "A-line Rate",
    "Keyword": "ALineRate",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0012)",
    "Name": "A-lines Per Frame",
    "Keyword": "ALinesPerFrame",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0013)",
    "Name": "Catheter Rotational Rate",
    "Keyword": "CatheterRotationalRate",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0014)",
    "Name": "A-line Pixel Spacing",
    "Keyword": "ALinePixelSpacing",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0016)",
    "Name": "Mode of Percutaneous Access Sequence",
    "Keyword": "ModeOfPercutaneousAccessSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0025)",
    "Name": "Intravascular OCT Frame Type Sequence",
    "Keyword": "IntravascularOCTFrameTypeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0026)",
    "Name": "OCT Z Offset Applied",
    "Keyword": "OCTZOffsetApplied",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0027)",
    "Name": "Intravascular Frame Content Sequence",
    "Keyword": "IntravascularFrameContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0028)",
    "Name": "Intravascular Longitudinal Distance",
    "Keyword": "IntravascularLongitudinalDistance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0029)",
    "Name": "Intravascular OCT Frame Content Sequence",
    "Keyword": "IntravascularOCTFrameContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0030)",
    "Name": "OCT Z Offset Correction",
    "Keyword": "OCTZOffsetCorrection",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0031)",
    "Name": "Catheter Direction of Rotation",
    "Keyword": "CatheterDirectionOfRotation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0033)",
    "Name": "Seam Line Location",
    "Keyword": "SeamLineLocation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0034)",
    "Name": "First A-line Location",
    "Keyword": "FirstALineLocation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0036)",
    "Name": "Seam Line Index",
    "Keyword": "SeamLineIndex",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0038)",
    "Name": "Number of Padded A-lines",
    "Keyword": "NumberOfPaddedALines",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0039)",
    "Name": "Interpolation Type",
    "Keyword": "InterpolationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,003A)",
    "Name": "Refractive Index Applied",
    "Keyword": "RefractiveIndexApplied",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0010)",
    "Name": "Energy Window Vector",
    "Keyword": "EnergyWindowVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0011)",
    "Name": "Number of Energy Windows",
    "Keyword": "NumberOfEnergyWindows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0012)",
    "Name": "Energy Window Information Sequence",
    "Keyword": "EnergyWindowInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0013)",
    "Name": "Energy Window Range Sequence",
    "Keyword": "EnergyWindowRangeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0014)",
    "Name": "Energy Window Lower Limit",
    "Keyword": "EnergyWindowLowerLimit",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0015)",
    "Name": "Energy Window Upper Limit",
    "Keyword": "EnergyWindowUpperLimit",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0016)",
    "Name": "Radiopharmaceutical Information Sequence",
    "Keyword": "RadiopharmaceuticalInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0017)",
    "Name": "Residual Syringe Counts",
    "Keyword": "ResidualSyringeCounts",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0018)",
    "Name": "Energy Window Name",
    "Keyword": "EnergyWindowName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0020)",
    "Name": "Detector Vector",
    "Keyword": "DetectorVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0021)",
    "Name": "Number of Detectors",
    "Keyword": "NumberOfDetectors",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0022)",
    "Name": "Detector Information Sequence",
    "Keyword": "DetectorInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0030)",
    "Name": "Phase Vector",
    "Keyword": "PhaseVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0031)",
    "Name": "Number of Phases",
    "Keyword": "NumberOfPhases",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0032)",
    "Name": "Phase Information Sequence",
    "Keyword": "PhaseInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0033)",
    "Name": "Number of Frames in Phase",
    "Keyword": "NumberOfFramesInPhase",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0036)",
    "Name": "Phase Delay",
    "Keyword": "PhaseDelay",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0038)",
    "Name": "Pause Between Frames",
    "Keyword": "PauseBetweenFrames",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0039)",
    "Name": "Phase Description",
    "Keyword": "PhaseDescription",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0050)",
    "Name": "Rotation Vector",
    "Keyword": "RotationVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0051)",
    "Name": "Number of Rotations",
    "Keyword": "NumberOfRotations",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0052)",
    "Name": "Rotation Information Sequence",
    "Keyword": "RotationInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0053)",
    "Name": "Number of Frames in Rotation",
    "Keyword": "NumberOfFramesInRotation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0060)",
    "Name": "R-R Interval Vector",
    "Keyword": "RRIntervalVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0061)",
    "Name": "Number of R-R Intervals",
    "Keyword": "NumberOfRRIntervals",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0062)",
    "Name": "Gated Information Sequence",
    "Keyword": "GatedInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0063)",
    "Name": "Data Information Sequence",
    "Keyword": "DataInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0070)",
    "Name": "Time Slot Vector",
    "Keyword": "TimeSlotVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0071)",
    "Name": "Number of Time Slots",
    "Keyword": "NumberOfTimeSlots",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0072)",
    "Name": "Time Slot Information Sequence",
    "Keyword": "TimeSlotInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0073)",
    "Name": "Time Slot Time",
    "Keyword": "TimeSlotTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0080)",
    "Name": "Slice Vector",
    "Keyword": "SliceVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0081)",
    "Name": "Number of Slices",
    "Keyword": "NumberOfSlices",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0090)",
    "Name": "Angular View Vector",
    "Keyword": "AngularViewVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0100)",
    "Name": "Time Slice Vector",
    "Keyword": "TimeSliceVector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0101)",
    "Name": "Number of Time Slices",
    "Keyword": "NumberOfTimeSlices",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0200)",
    "Name": "Start Angle",
    "Keyword": "StartAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0202)",
    "Name": "Type of Detector Motion",
    "Keyword": "TypeOfDetectorMotion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0210)",
    "Name": "Trigger Vector",
    "Keyword": "TriggerVector",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0211)",
    "Name": "Number of Triggers in Phase",
    "Keyword": "NumberOfTriggersInPhase",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0220)",
    "Name": "View Code Sequence",
    "Keyword": "ViewCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0222)",
    "Name": "View Modifier Code Sequence",
    "Keyword": "ViewModifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0300)",
    "Name": "Radionuclide Code Sequence",
    "Keyword": "RadionuclideCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0302)",
    "Name": "Administration Route Code Sequence",
    "Keyword": "AdministrationRouteCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0304)",
    "Name": "Radiopharmaceutical Code Sequence",
    "Keyword": "RadiopharmaceuticalCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0306)",
    "Name": "Calibration Data Sequence",
    "Keyword": "CalibrationDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0308)",
    "Name": "Energy Window Number",
    "Keyword": "EnergyWindowNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0400)",
    "Name": "Image ID",
    "Keyword": "ImageID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0410)",
    "Name": "Patient Orientation Code Sequence",
    "Keyword": "PatientOrientationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0412)",
    "Name": "Patient Orientation Modifier Code Sequence",
    "Keyword": "PatientOrientationModifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0414)",
    "Name": "Patient Gantry Relationship Code Sequence",
    "Keyword": "PatientGantryRelationshipCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0500)",
    "Name": "Slice Progression Direction",
    "Keyword": "SliceProgressionDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1000)",
    "Name": "Series Type",
    "Keyword": "SeriesType",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1001)",
    "Name": "Units",
    "Keyword": "Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1002)",
    "Name": "Counts Source",
    "Keyword": "CountsSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1004)",
    "Name": "Reprojection Method",
    "Keyword": "ReprojectionMethod",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1006)",
    "Name": "SUV Type",
    "Keyword": "SUVType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1100)",
    "Name": "Randoms Correction Method",
    "Keyword": "RandomsCorrectionMethod",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1101)",
    "Name": "Attenuation Correction Method",
    "Keyword": "AttenuationCorrectionMethod",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1102)",
    "Name": "Decay Correction",
    "Keyword": "DecayCorrection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1103)",
    "Name": "Reconstruction Method",
    "Keyword": "ReconstructionMethod",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1104)",
    "Name": "Detector Lines of Response Used",
    "Keyword": "DetectorLinesOfResponseUsed",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1105)",
    "Name": "Scatter Correction Method",
    "Keyword": "ScatterCorrectionMethod",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1200)",
    "Name": "Axial Acceptance",
    "Keyword": "AxialAcceptance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1201)",
    "Name": "Axial Mash",
    "Keyword": "AxialMash",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1202)",
    "Name": "Transverse Mash",
    "Keyword": "TransverseMash",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1203)",
    "Name": "Detector Element Size",
    "Keyword": "DetectorElementSize",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1210)",
    "Name": "Coincidence Window Width",
    "Keyword": "CoincidenceWindowWidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1220)",
    "Name": "Secondary Counts Type",
    "Keyword": "SecondaryCountsType",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,1300)",
    "Name": "Frame Reference Time",
    "Keyword": "FrameReferenceTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1310)",
    "Name": "Primary (Prompts) Counts Accumulated",
    "Keyword": "PrimaryPromptsCountsAccumulated",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1311)",
    "Name": "Secondary Counts Accumulated",
    "Keyword": "SecondaryCountsAccumulated",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,1320)",
    "Name": "Slice Sensitivity Factor",
    "Keyword": "SliceSensitivityFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1321)",
    "Name": "Decay Factor",
    "Keyword": "DecayFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1322)",
    "Name": "Dose Calibration Factor",
    "Keyword": "DoseCalibrationFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1323)",
    "Name": "Scatter Fraction Factor",
    "Keyword": "ScatterFractionFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1324)",
    "Name": "Dead Time Factor",
    "Keyword": "DeadTimeFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1330)",
    "Name": "Image Index",
    "Keyword": "ImageIndex",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1400)",
    "Name": "Counts Included",
    "Keyword": "CountsIncluded",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0054,1401)",
    "Name": "Dead Time Correction Flag",
    "Keyword": "DeadTimeCorrectionFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0060,3000)",
    "Name": "Histogram Sequence",
    "Keyword": "HistogramSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3002)",
    "Name": "Histogram Number of Bins",
    "Keyword": "HistogramNumberOfBins",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3004)",
    "Name": "Histogram First Bin Value",
    "Keyword": "HistogramFirstBinValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3006)",
    "Name": "Histogram Last Bin Value",
    "Keyword": "HistogramLastBinValue",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3008)",
    "Name": "Histogram Bin Width",
    "Keyword": "HistogramBinWidth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3010)",
    "Name": "Histogram Explanation",
    "Keyword": "HistogramExplanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3020)",
    "Name": "Histogram Data",
    "Keyword": "HistogramData",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0062,0001)",
    "Name": "Segmentation Type",
    "Keyword": "SegmentationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0002)",
    "Name": "Segment Sequence",
    "Keyword": "SegmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0003)",
    "Name": "Segmented Property Category Code Sequence",
    "Keyword": "SegmentedPropertyCategoryCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0004)",
    "Name": "Segment Number",
    "Keyword": "SegmentNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0005)",
    "Name": "Segment Label",
    "Keyword": "SegmentLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0006)",
    "Name": "Segment Description",
    "Keyword": "SegmentDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0008)",
    "Name": "Segment Algorithm Type",
    "Keyword": "SegmentAlgorithmType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0009)",
    "Name": "Segment Algorithm Name",
    "Keyword": "SegmentAlgorithmName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000A)",
    "Name": "Segment Identification Sequence",
    "Keyword": "SegmentIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000B)",
    "Name": "Referenced Segment Number",
    "Keyword": "ReferencedSegmentNumber",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0062,000C)",
    "Name": "Recommended Display Grayscale Value",
    "Keyword": "RecommendedDisplayGrayscaleValue",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000D)",
    "Name": "Recommended Display CIELab Value",
    "Keyword": "RecommendedDisplayCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0062,000E)",
    "Name": "Maximum Fractional Value",
    "Keyword": "MaximumFractionalValue",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000F)",
    "Name": "Segmented Property Type Code Sequence",
    "Keyword": "SegmentedPropertyTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0010)",
    "Name": "Segmentation Fractional Type",
    "Keyword": "SegmentationFractionalType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0011)",
    "Name": "Segmented Property Type Modifier Code Sequence",
    "Keyword": "SegmentedPropertyTypeModifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0012)",
    "Name": "Used Segments Sequence",
    "Keyword": "UsedSegmentsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0002)",
    "Name": "Deformable Registration Sequence",
    "Keyword": "DeformableRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0003)",
    "Name": "Source Frame of Reference UID",
    "Keyword": "SourceFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0005)",
    "Name": "Deformable Registration Grid Sequence",
    "Keyword": "DeformableRegistrationGridSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0007)",
    "Name": "Grid Dimensions",
    "Keyword": "GridDimensions",
    "VR": "UL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0064,0008)",
    "Name": "Grid Resolution",
    "Keyword": "GridResolution",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0064,0009)",
    "Name": "Vector Grid Data",
    "Keyword": "VectorGridData",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,000F)",
    "Name": "Pre Deformation Matrix Registration Sequence",
    "Keyword": "PreDeformationMatrixRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0010)",
    "Name": "Post Deformation Matrix Registration Sequence",
    "Keyword": "PostDeformationMatrixRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0001)",
    "Name": "Number of Surfaces",
    "Keyword": "NumberOfSurfaces",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0002)",
    "Name": "Surface Sequence",
    "Keyword": "SurfaceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0003)",
    "Name": "Surface Number",
    "Keyword": "SurfaceNumber",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0004)",
    "Name": "Surface Comments",
    "Keyword": "SurfaceComments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0009)",
    "Name": "Surface Processing",
    "Keyword": "SurfaceProcessing",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000A)",
    "Name": "Surface Processing Ratio",
    "Keyword": "SurfaceProcessingRatio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000B)",
    "Name": "Surface Processing Description",
    "Keyword": "SurfaceProcessingDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000C)",
    "Name": "Recommended Presentation Opacity",
    "Keyword": "RecommendedPresentationOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000D)",
    "Name": "Recommended Presentation Type",
    "Keyword": "RecommendedPresentationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000E)",
    "Name": "Finite Volume",
    "Keyword": "FiniteVolume",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0010)",
    "Name": "Manifold",
    "Keyword": "Manifold",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0011)",
    "Name": "Surface Points Sequence",
    "Keyword": "SurfacePointsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0012)",
    "Name": "Surface Points Normals Sequence",
    "Keyword": "SurfacePointsNormalsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0013)",
    "Name": "Surface Mesh Primitives Sequence",
    "Keyword": "SurfaceMeshPrimitivesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0015)",
    "Name": "Number of Surface Points",
    "Keyword": "NumberOfSurfacePoints",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0016)",
    "Name": "Point Coordinates Data",
    "Keyword": "PointCoordinatesData",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0017)",
    "Name": "Point Position Accuracy",
    "Keyword": "PointPositionAccuracy",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,0018)",
    "Name": "Mean Point Distance",
    "Keyword": "MeanPointDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0019)",
    "Name": "Maximum Point Distance",
    "Keyword": "MaximumPointDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,001A)",
    "Name": "Points Bounding Box Coordinates",
    "Keyword": "PointsBoundingBoxCoordinates",
    "VR": "FL",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0066,001B)",
    "Name": "Axis of Rotation",
    "Keyword": "AxisOfRotation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,001C)",
    "Name": "Center of Rotation",
    "Keyword": "CenterOfRotation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,001E)",
    "Name": "Number of Vectors",
    "Keyword": "NumberOfVectors",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,001F)",
    "Name": "Vector Dimensionality",
    "Keyword": "VectorDimensionality",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0020)",
    "Name": "Vector Accuracy",
    "Keyword": "VectorAccuracy",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0066,0021)",
    "Name": "Vector Coordinate Data",
    "Keyword": "VectorCoordinateData",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0023)",
    "Name": "Triangle Point Index List",
    "Keyword": "TrianglePointIndexList",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0024)",
    "Name": "Edge Point Index List",
    "Keyword": "EdgePointIndexList",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0025)",
    "Name": "Vertex Point Index List",
    "Keyword": "VertexPointIndexList",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0026)",
    "Name": "Triangle Strip Sequence",
    "Keyword": "TriangleStripSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0027)",
    "Name": "Triangle Fan Sequence",
    "Keyword": "TriangleFanSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0028)",
    "Name": "Line Sequence",
    "Keyword": "LineSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0029)",
    "Name": "Primitive Point Index List",
    "Keyword": "PrimitivePointIndexList",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002A)",
    "Name": "Surface Count",
    "Keyword": "SurfaceCount",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002B)",
    "Name": "Referenced Surface Sequence",
    "Keyword": "ReferencedSurfaceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002C)",
    "Name": "Referenced Surface Number",
    "Keyword": "ReferencedSurfaceNumber",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002D)",
    "Name": "Segment Surface Generation Algorithm Identification Sequence",
    "Keyword": "SegmentSurfaceGenerationAlgorithmIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002E)",
    "Name": "Segment Surface Source Instance Sequence",
    "Keyword": "SegmentSurfaceSourceInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002F)",
    "Name": "Algorithm Family Code Sequence",
    "Keyword": "AlgorithmFamilyCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0030)",
    "Name": "Algorithm Name Code Sequence",
    "Keyword": "AlgorithmNameCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0031)",
    "Name": "Algorithm Version",
    "Keyword": "AlgorithmVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0032)",
    "Name": "Algorithm Parameters",
    "Keyword": "AlgorithmParameters",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0034)",
    "Name": "Facet Sequence",
    "Keyword": "FacetSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0035)",
    "Name": "Surface Processing Algorithm Identification Sequence",
    "Keyword": "SurfaceProcessingAlgorithmIdentificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0036)",
    "Name": "Algorithm Name",
    "Keyword": "AlgorithmName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0037)",
    "Name": "Recommended Point Radius",
    "Keyword": "RecommendedPointRadius",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0038)",
    "Name": "Recommended Line Thickness",
    "Keyword": "RecommendedLineThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6210)",
    "Name": "Implant Size",
    "Keyword": "ImplantSize",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6221)",
    "Name": "Implant Template Version",
    "Keyword": "ImplantTemplateVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6222)",
    "Name": "Replaced Implant Template Sequence",
    "Keyword": "ReplacedImplantTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6223)",
    "Name": "Implant Type",
    "Keyword": "ImplantType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6224)",
    "Name": "Derivation Implant Template Sequence",
    "Keyword": "DerivationImplantTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6225)",
    "Name": "Original Implant Template Sequence",
    "Keyword": "OriginalImplantTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6226)",
    "Name": "Effective DateTime",
    "Keyword": "EffectiveDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6230)",
    "Name": "Implant Target Anatomy Sequence",
    "Keyword": "ImplantTargetAnatomySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6260)",
    "Name": "Information From Manufacturer Sequence",
    "Keyword": "InformationFromManufacturerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6265)",
    "Name": "Notification From Manufacturer Sequence",
    "Keyword": "NotificationFromManufacturerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6270)",
    "Name": "Information Issue DateTime",
    "Keyword": "InformationIssueDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6280)",
    "Name": "Information Summary",
    "Keyword": "InformationSummary",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62A0)",
    "Name": "Implant Regulatory Disapproval Code Sequence",
    "Keyword": "ImplantRegulatoryDisapprovalCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62A5)",
    "Name": "Overall Template Spatial Tolerance",
    "Keyword": "OverallTemplateSpatialTolerance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62C0)",
    "Name": "HPGL Document Sequence",
    "Keyword": "HPGLDocumentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62D0)",
    "Name": "HPGL Document ID",
    "Keyword": "HPGLDocumentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62D5)",
    "Name": "HPGL Document Label",
    "Keyword": "HPGLDocumentLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62E0)",
    "Name": "View Orientation Code Sequence",
    "Keyword": "ViewOrientationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62F0)",
    "Name": "View Orientation Modifier",
    "Keyword": "ViewOrientationModifier",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0068,62F2)",
    "Name": "HPGL Document Scaling",
    "Keyword": "HPGLDocumentScaling",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6300)",
    "Name": "HPGL Document",
    "Keyword": "HPGLDocument",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6310)",
    "Name": "HPGL Contour Pen Number",
    "Keyword": "HPGLContourPenNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6320)",
    "Name": "HPGL Pen Sequence",
    "Keyword": "HPGLPenSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6330)",
    "Name": "HPGL Pen Number",
    "Keyword": "HPGLPenNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6340)",
    "Name": "HPGL Pen Label",
    "Keyword": "HPGLPenLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6345)",
    "Name": "HPGL Pen Description",
    "Keyword": "HPGLPenDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6346)",
    "Name": "Recommended Rotation Point",
    "Keyword": "RecommendedRotationPoint",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6347)",
    "Name": "Bounding Rectangle",
    "Keyword": "BoundingRectangle",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6350)",
    "Name": "Implant Template 3D Model Surface Number",
    "Keyword": "ImplantTemplate3DModelSurfaceNumber",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0068,6360)",
    "Name": "Surface Model Description Sequence",
    "Keyword": "SurfaceModelDescriptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6380)",
    "Name": "Surface Model Label",
    "Keyword": "SurfaceModelLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6390)",
    "Name": "Surface Model Scaling Factor",
    "Keyword": "SurfaceModelScalingFactor",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A0)",
    "Name": "Materials Code Sequence",
    "Keyword": "MaterialsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A4)",
    "Name": "Coating Materials Code Sequence",
    "Keyword": "CoatingMaterialsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A8)",
    "Name": "Implant Type Code Sequence",
    "Keyword": "ImplantTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63AC)",
    "Name": "Fixation Method Code Sequence",
    "Keyword": "FixationMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63B0)",
    "Name": "Mating Feature Sets Sequence",
    "Keyword": "MatingFeatureSetsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63C0)",
    "Name": "Mating Feature Set ID",
    "Keyword": "MatingFeatureSetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63D0)",
    "Name": "Mating Feature Set Label",
    "Keyword": "MatingFeatureSetLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63E0)",
    "Name": "Mating Feature Sequence",
    "Keyword": "MatingFeatureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63F0)",
    "Name": "Mating Feature ID",
    "Keyword": "MatingFeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6400)",
    "Name": "Mating Feature Degree of Freedom Sequence",
    "Keyword": "MatingFeatureDegreeOfFreedomSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6410)",
    "Name": "Degree of Freedom ID",
    "Keyword": "DegreeOfFreedomID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6420)",
    "Name": "Degree of Freedom Type",
    "Keyword": "DegreeOfFreedomType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6430)",
    "Name": "2D Mating Feature Coordinates Sequence",
    "Keyword": "TwoDMatingFeatureCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6440)",
    "Name": "Referenced HPGL Document ID",
    "Keyword": "ReferencedHPGLDocumentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6450)",
    "Name": "2D Mating Point",
    "Keyword": "TwoDMatingPoint",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6460)",
    "Name": "2D Mating Axes",
    "Keyword": "TwoDMatingAxes",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6470)",
    "Name": "2D Degree of Freedom Sequence",
    "Keyword": "TwoDDegreeOfFreedomSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6490)",
    "Name": "3D Degree of Freedom Axis",
    "Keyword": "ThreeDDegreeOfFreedomAxis",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,64A0)",
    "Name": "Range of Freedom",
    "Keyword": "RangeOfFreedom",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,64C0)",
    "Name": "3D Mating Point",
    "Keyword": "ThreeDMatingPoint",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,64D0)",
    "Name": "3D Mating Axes",
    "Keyword": "ThreeDMatingAxes",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0068,64F0)",
    "Name": "2D Degree of Freedom Axis",
    "Keyword": "TwoDDegreeOfFreedomAxis",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,6500)",
    "Name": "Planning Landmark Point Sequence",
    "Keyword": "PlanningLandmarkPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6510)",
    "Name": "Planning Landmark Line Sequence",
    "Keyword": "PlanningLandmarkLineSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6520)",
    "Name": "Planning Landmark Plane Sequence",
    "Keyword": "PlanningLandmarkPlaneSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6530)",
    "Name": "Planning Landmark ID",
    "Keyword": "PlanningLandmarkID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6540)",
    "Name": "Planning Landmark Description",
    "Keyword": "PlanningLandmarkDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6545)",
    "Name": "Planning Landmark Identification Code Sequence",
    "Keyword": "PlanningLandmarkIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6550)",
    "Name": "2D Point Coordinates Sequence",
    "Keyword": "TwoDPointCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6560)",
    "Name": "2D Point Coordinates",
    "Keyword": "TwoDPointCoordinates",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6590)",
    "Name": "3D Point Coordinates",
    "Keyword": "ThreeDPointCoordinates",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,65A0)",
    "Name": "2D Line Coordinates Sequence",
    "Keyword": "TwoDLineCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,65B0)",
    "Name": "2D Line Coordinates",
    "Keyword": "TwoDLineCoordinates",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,65D0)",
    "Name": "3D Line Coordinates",
    "Keyword": "ThreeDLineCoordinates",
    "VR": "FD",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0068,65E0)",
    "Name": "2D Plane Coordinates Sequence",
    "Keyword": "TwoDPlaneCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,65F0)",
    "Name": "2D Plane Intersection",
    "Keyword": "TwoDPlaneIntersection",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6610)",
    "Name": "3D Plane Origin",
    "Keyword": "ThreeDPlaneOrigin",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,6620)",
    "Name": "3D Plane Normal",
    "Keyword": "ThreeDPlaneNormal",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0001)",
    "Name": "Graphic Annotation Sequence",
    "Keyword": "GraphicAnnotationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0002)",
    "Name": "Graphic Layer",
    "Keyword": "GraphicLayer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0003)",
    "Name": "Bounding Box Annotation Units",
    "Keyword": "BoundingBoxAnnotationUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0004)",
    "Name": "Anchor Point Annotation Units",
    "Keyword": "AnchorPointAnnotationUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0005)",
    "Name": "Graphic Annotation Units",
    "Keyword": "GraphicAnnotationUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0006)",
    "Name": "Unformatted Text Value",
    "Keyword": "UnformattedTextValue",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0008)",
    "Name": "Text Object Sequence",
    "Keyword": "TextObjectSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0009)",
    "Name": "Graphic Object Sequence",
    "Keyword": "GraphicObjectSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0010)",
    "Name": "Bounding Box Top Left Hand Corner",
    "Keyword": "BoundingBoxTopLeftHandCorner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0011)",
    "Name": "Bounding Box Bottom Right Hand Corner",
    "Keyword": "BoundingBoxBottomRightHandCorner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0012)",
    "Name": "Bounding Box Text Horizontal Justification",
    "Keyword": "BoundingBoxTextHorizontalJustification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0014)",
    "Name": "Anchor Point",
    "Keyword": "AnchorPoint",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0015)",
    "Name": "Anchor Point Visibility",
    "Keyword": "AnchorPointVisibility",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0020)",
    "Name": "Graphic Dimensions",
    "Keyword": "GraphicDimensions",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0021)",
    "Name": "Number of Graphic Points",
    "Keyword": "NumberOfGraphicPoints",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0022)",
    "Name": "Graphic Data",
    "Keyword": "GraphicData",
    "VR": "FL",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0070,0023)",
    "Name": "Graphic Type",
    "Keyword": "GraphicType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0024)",
    "Name": "Graphic Filled",
    "Keyword": "GraphicFilled",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0040)",
    "Name": "Image Rotation (Retired)",
    "Keyword": "ImageRotationRetired",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0041)",
    "Name": "Image Horizontal Flip",
    "Keyword": "ImageHorizontalFlip",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0042)",
    "Name": "Image Rotation",
    "Keyword": "ImageRotation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0050)",
    "Name": "Displayed Area Top Left Hand Corner (Trial)",
    "Keyword": "DisplayedAreaTopLeftHandCornerTrial",
    "VR": "US",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0051)",
    "Name": "Displayed Area Bottom Right Hand Corner (Trial)",
    "Keyword": "DisplayedAreaBottomRightHandCornerTrial",
    "VR": "US",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0052)",
    "Name": "Displayed Area Top Left Hand Corner",
    "Keyword": "DisplayedAreaTopLeftHandCorner",
    "VR": "SL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0053)",
    "Name": "Displayed Area Bottom Right Hand Corner",
    "Keyword": "DisplayedAreaBottomRightHandCorner",
    "VR": "SL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,005A)",
    "Name": "Displayed Area Selection Sequence",
    "Keyword": "DisplayedAreaSelectionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0060)",
    "Name": "Graphic Layer Sequence",
    "Keyword": "GraphicLayerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0062)",
    "Name": "Graphic Layer Order",
    "Keyword": "GraphicLayerOrder",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0066)",
    "Name": "Graphic Layer Recommended Display Grayscale Value",
    "Keyword": "GraphicLayerRecommendedDisplayGrayscaleValue",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0067)",
    "Name": "Graphic Layer Recommended Display RGB Value",
    "Keyword": "GraphicLayerRecommendedDisplayRGBValue",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0068)",
    "Name": "Graphic Layer Description",
    "Keyword": "GraphicLayerDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0080)",
    "Name": "Content Label",
    "Keyword": "ContentLabel",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0081)",
    "Name": "Content Description",
    "Keyword": "ContentDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0082)",
    "Name": "Presentation Creation Date",
    "Keyword": "PresentationCreationDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0083)",
    "Name": "Presentation Creation Time",
    "Keyword": "PresentationCreationTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0084)",
    "Name": "Content Creator's Name",
    "Keyword": "ContentCreatorName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0086)",
    "Name": "Content Creator's Identification Code Sequence",
    "Keyword": "ContentCreatorIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0087)",
    "Name": "Alternate Content Description Sequence",
    "Keyword": "AlternateContentDescriptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0100)",
    "Name": "Presentation Size Mode",
    "Keyword": "PresentationSizeMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0101)",
    "Name": "Presentation Pixel Spacing",
    "Keyword": "PresentationPixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0102)",
    "Name": "Presentation Pixel Aspect Ratio",
    "Keyword": "PresentationPixelAspectRatio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0103)",
    "Name": "Presentation Pixel Magnification Ratio",
    "Keyword": "PresentationPixelMagnificationRatio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0207)",
    "Name": "Graphic Group Label",
    "Keyword": "GraphicGroupLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0208)",
    "Name": "Graphic Group Description",
    "Keyword": "GraphicGroupDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0209)",
    "Name": "Compound Graphic Sequence",
    "Keyword": "CompoundGraphicSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0226)",
    "Name": "Compound Graphic Instance ID",
    "Keyword": "CompoundGraphicInstanceID",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0227)",
    "Name": "Font Name",
    "Keyword": "FontName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0228)",
    "Name": "Font Name Type",
    "Keyword": "FontNameType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0229)",
    "Name": "CSS Font Name",
    "Keyword": "CSSFontName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0230)",
    "Name": "Rotation Angle",
    "Keyword": "RotationAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0231)",
    "Name": "Text Style Sequence",
    "Keyword": "TextStyleSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0232)",
    "Name": "Line Style Sequence",
    "Keyword": "LineStyleSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0233)",
    "Name": "Fill Style Sequence",
    "Keyword": "FillStyleSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0234)",
    "Name": "Graphic Group Sequence",
    "Keyword": "GraphicGroupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0241)",
    "Name": "Text Color CIELab Value",
    "Keyword": "TextColorCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0242)",
    "Name": "Horizontal Alignment",
    "Keyword": "HorizontalAlignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0243)",
    "Name": "Vertical Alignment",
    "Keyword": "VerticalAlignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0244)",
    "Name": "Shadow Style",
    "Keyword": "ShadowStyle",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0245)",
    "Name": "Shadow Offset X",
    "Keyword": "ShadowOffsetX",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0246)",
    "Name": "Shadow Offset Y",
    "Keyword": "ShadowOffsetY",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0247)",
    "Name": "Shadow Color CIELab Value",
    "Keyword": "ShadowColorCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0248)",
    "Name": "Underlined",
    "Keyword": "Underlined",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0249)",
    "Name": "Bold",
    "Keyword": "Bold",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0250)",
    "Name": "Italic",
    "Keyword": "Italic",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0251)",
    "Name": "Pattern On Color CIELab Value",
    "Keyword": "PatternOnColorCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0252)",
    "Name": "Pattern Off Color CIELab Value",
    "Keyword": "PatternOffColorCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0253)",
    "Name": "Line Thickness",
    "Keyword": "LineThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0254)",
    "Name": "Line Dashing Style",
    "Keyword": "LineDashingStyle",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0255)",
    "Name": "Line Pattern",
    "Keyword": "LinePattern",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0256)",
    "Name": "Fill Pattern",
    "Keyword": "FillPattern",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0257)",
    "Name": "Fill Mode",
    "Keyword": "FillMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0258)",
    "Name": "Shadow Opacity",
    "Keyword": "ShadowOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0261)",
    "Name": "Gap Length",
    "Keyword": "GapLength",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0262)",
    "Name": "Diameter of Visibility",
    "Keyword": "DiameterOfVisibility",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0273)",
    "Name": "Rotation Point",
    "Keyword": "RotationPoint",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0274)",
    "Name": "Tick Alignment",
    "Keyword": "TickAlignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0278)",
    "Name": "Show Tick Label",
    "Keyword": "ShowTickLabel",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0279)",
    "Name": "Tick Label Alignment",
    "Keyword": "TickLabelAlignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0282)",
    "Name": "Compound Graphic Units",
    "Keyword": "CompoundGraphicUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0284)",
    "Name": "Pattern On Opacity",
    "Keyword": "PatternOnOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0285)",
    "Name": "Pattern Off Opacity",
    "Keyword": "PatternOffOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0287)",
    "Name": "Major Ticks Sequence",
    "Keyword": "MajorTicksSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0288)",
    "Name": "Tick Position",
    "Keyword": "TickPosition",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0289)",
    "Name": "Tick Label",
    "Keyword": "TickLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0294)",
    "Name": "Compound Graphic Type",
    "Keyword": "CompoundGraphicType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0295)",
    "Name": "Graphic Group ID",
    "Keyword": "GraphicGroupID",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0306)",
    "Name": "Shape Type",
    "Keyword": "ShapeType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0308)",
    "Name": "Registration Sequence",
    "Keyword": "RegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0309)",
    "Name": "Matrix Registration Sequence",
    "Keyword": "MatrixRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030A)",
    "Name": "Matrix Sequence",
    "Keyword": "MatrixSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030C)",
    "Name": "Frame of Reference Transformation Matrix Type",
    "Keyword": "FrameOfReferenceTransformationMatrixType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030D)",
    "Name": "Registration Type Code Sequence",
    "Keyword": "RegistrationTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030F)",
    "Name": "Fiducial Description",
    "Keyword": "FiducialDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0310)",
    "Name": "Fiducial Identifier",
    "Keyword": "FiducialIdentifier",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0311)",
    "Name": "Fiducial Identifier Code Sequence",
    "Keyword": "FiducialIdentifierCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0312)",
    "Name": "Contour Uncertainty Radius",
    "Keyword": "ContourUncertaintyRadius",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0314)",
    "Name": "Used Fiducials Sequence",
    "Keyword": "UsedFiducialsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0318)",
    "Name": "Graphic Coordinates Data Sequence",
    "Keyword": "GraphicCoordinatesDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031A)",
    "Name": "Fiducial UID",
    "Keyword": "FiducialUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031C)",
    "Name": "Fiducial Set Sequence",
    "Keyword": "FiducialSetSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031E)",
    "Name": "Fiducial Sequence",
    "Keyword": "FiducialSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0401)",
    "Name": "Graphic Layer Recommended Display CIELab Value",
    "Keyword": "GraphicLayerRecommendedDisplayCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0402)",
    "Name": "Blending Sequence",
    "Keyword": "BlendingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0403)",
    "Name": "Relative Opacity",
    "Keyword": "RelativeOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0404)",
    "Name": "Referenced Spatial Registration Sequence",
    "Keyword": "ReferencedSpatialRegistrationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0405)",
    "Name": "Blending Position",
    "Keyword": "BlendingPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0002)",
    "Name": "Hanging Protocol Name",
    "Keyword": "HangingProtocolName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0004)",
    "Name": "Hanging Protocol Description",
    "Keyword": "HangingProtocolDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0006)",
    "Name": "Hanging Protocol Level",
    "Keyword": "HangingProtocolLevel",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0008)",
    "Name": "Hanging Protocol Creator",
    "Keyword": "HangingProtocolCreator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000A)",
    "Name": "Hanging Protocol Creation DateTime",
    "Keyword": "HangingProtocolCreationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000C)",
    "Name": "Hanging Protocol Definition Sequence",
    "Keyword": "HangingProtocolDefinitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000E)",
    "Name": "Hanging Protocol User Identification Code Sequence",
    "Keyword": "HangingProtocolUserIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0010)",
    "Name": "Hanging Protocol User Group Name",
    "Keyword": "HangingProtocolUserGroupName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0012)",
    "Name": "Source Hanging Protocol Sequence",
    "Keyword": "SourceHangingProtocolSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0014)",
    "Name": "Number of Priors Referenced",
    "Keyword": "NumberOfPriorsReferenced",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0020)",
    "Name": "Image Sets Sequence",
    "Keyword": "ImageSetsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0022)",
    "Name": "Image Set Selector Sequence",
    "Keyword": "ImageSetSelectorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0024)",
    "Name": "Image Set Selector Usage Flag",
    "Keyword": "ImageSetSelectorUsageFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0026)",
    "Name": "Selector Attribute",
    "Keyword": "SelectorAttribute",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0028)",
    "Name": "Selector Value Number",
    "Keyword": "SelectorValueNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0030)",
    "Name": "Time Based Image Sets Sequence",
    "Keyword": "TimeBasedImageSetsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0032)",
    "Name": "Image Set Number",
    "Keyword": "ImageSetNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0034)",
    "Name": "Image Set Selector Category",
    "Keyword": "ImageSetSelectorCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0038)",
    "Name": "Relative Time",
    "Keyword": "RelativeTime",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,003A)",
    "Name": "Relative Time Units",
    "Keyword": "RelativeTimeUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,003C)",
    "Name": "Abstract Prior Value",
    "Keyword": "AbstractPriorValue",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,003E)",
    "Name": "Abstract Prior Code Sequence",
    "Keyword": "AbstractPriorCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0040)",
    "Name": "Image Set Label",
    "Keyword": "ImageSetLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0050)",
    "Name": "Selector Attribute VR",
    "Keyword": "SelectorAttributeVR",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0052)",
    "Name": "Selector Sequence Pointer",
    "Keyword": "SelectorSequencePointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0054)",
    "Name": "Selector Sequence Pointer Private Creator",
    "Keyword": "SelectorSequencePointerPrivateCreator",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0056)",
    "Name": "Selector Attribute Private Creator",
    "Keyword": "SelectorAttributePrivateCreator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0060)",
    "Name": "Selector AT Value",
    "Keyword": "SelectorATValue",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0062)",
    "Name": "Selector CS Value",
    "Keyword": "SelectorCSValue",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0064)",
    "Name": "Selector IS Value",
    "Keyword": "SelectorISValue",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0066)",
    "Name": "Selector LO Value",
    "Keyword": "SelectorLOValue",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0068)",
    "Name": "Selector LT Value",
    "Keyword": "SelectorLTValue",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,006A)",
    "Name": "Selector PN Value",
    "Keyword": "SelectorPNValue",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,006C)",
    "Name": "Selector SH Value",
    "Keyword": "SelectorSHValue",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,006E)",
    "Name": "Selector ST Value",
    "Keyword": "SelectorSTValue",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0070)",
    "Name": "Selector UT Value",
    "Keyword": "SelectorUTValue",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0072)",
    "Name": "Selector DS Value",
    "Keyword": "SelectorDSValue",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0074)",
    "Name": "Selector FD Value",
    "Keyword": "SelectorFDValue",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0076)",
    "Name": "Selector FL Value",
    "Keyword": "SelectorFLValue",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0078)",
    "Name": "Selector UL Value",
    "Keyword": "SelectorULValue",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007A)",
    "Name": "Selector US Value",
    "Keyword": "SelectorUSValue",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007C)",
    "Name": "Selector SL Value",
    "Keyword": "SelectorSLValue",
    "VR": "SL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007E)",
    "Name": "Selector SS Value",
    "Keyword": "SelectorSSValue",
    "VR": "SS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0080)",
    "Name": "Selector Code Sequence Value",
    "Keyword": "SelectorCodeSequenceValue",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0100)",
    "Name": "Number of Screens",
    "Keyword": "NumberOfScreens",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0102)",
    "Name": "Nominal Screen Definition Sequence",
    "Keyword": "NominalScreenDefinitionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0104)",
    "Name": "Number of Vertical Pixels",
    "Keyword": "NumberOfVerticalPixels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0106)",
    "Name": "Number of Horizontal Pixels",
    "Keyword": "NumberOfHorizontalPixels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0108)",
    "Name": "Display Environment Spatial Position",
    "Keyword": "DisplayEnvironmentSpatialPosition",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0072,010A)",
    "Name": "Screen Minimum Grayscale Bit Depth",
    "Keyword": "ScreenMinimumGrayscaleBitDepth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,010C)",
    "Name": "Screen Minimum Color Bit Depth",
    "Keyword": "ScreenMinimumColorBitDepth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,010E)",
    "Name": "Application Maximum Repaint Time",
    "Keyword": "ApplicationMaximumRepaintTime",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0200)",
    "Name": "Display Sets Sequence",
    "Keyword": "DisplaySetsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0202)",
    "Name": "Display Set Number",
    "Keyword": "DisplaySetNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0203)",
    "Name": "Display Set Label",
    "Keyword": "DisplaySetLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0204)",
    "Name": "Display Set Presentation Group",
    "Keyword": "DisplaySetPresentationGroup",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0206)",
    "Name": "Display Set Presentation Group Description",
    "Keyword": "DisplaySetPresentationGroupDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0208)",
    "Name": "Partial Data Display Handling",
    "Keyword": "PartialDataDisplayHandling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0210)",
    "Name": "Synchronized Scrolling Sequence",
    "Keyword": "SynchronizedScrollingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0212)",
    "Name": "Display Set Scrolling Group",
    "Keyword": "DisplaySetScrollingGroup",
    "VR": "US",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0214)",
    "Name": "Navigation Indicator Sequence",
    "Keyword": "NavigationIndicatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0216)",
    "Name": "Navigation Display Set",
    "Keyword": "NavigationDisplaySet",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0218)",
    "Name": "Reference Display Sets",
    "Keyword": "ReferenceDisplaySets",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0300)",
    "Name": "Image Boxes Sequence",
    "Keyword": "ImageBoxesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0302)",
    "Name": "Image Box Number",
    "Keyword": "ImageBoxNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0304)",
    "Name": "Image Box Layout Type",
    "Keyword": "ImageBoxLayoutType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0306)",
    "Name": "Image Box Tile Horizontal Dimension",
    "Keyword": "ImageBoxTileHorizontalDimension",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0308)",
    "Name": "Image Box Tile Vertical Dimension",
    "Keyword": "ImageBoxTileVerticalDimension",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0310)",
    "Name": "Image Box Scroll Direction",
    "Keyword": "ImageBoxScrollDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0312)",
    "Name": "Image Box Small Scroll Type",
    "Keyword": "ImageBoxSmallScrollType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0314)",
    "Name": "Image Box Small Scroll Amount",
    "Keyword": "ImageBoxSmallScrollAmount",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0316)",
    "Name": "Image Box Large Scroll Type",
    "Keyword": "ImageBoxLargeScrollType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0318)",
    "Name": "Image Box Large Scroll Amount",
    "Keyword": "ImageBoxLargeScrollAmount",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0320)",
    "Name": "Image Box Overlap Priority",
    "Keyword": "ImageBoxOverlapPriority",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0330)",
    "Name": "Cine Relative to Real-Time",
    "Keyword": "CineRelativeToRealTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0400)",
    "Name": "Filter Operations Sequence",
    "Keyword": "FilterOperationsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0402)",
    "Name": "Filter-by Category",
    "Keyword": "FilterByCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0404)",
    "Name": "Filter-by Attribute Presence",
    "Keyword": "FilterByAttributePresence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0406)",
    "Name": "Filter-by Operator",
    "Keyword": "FilterByOperator",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0420)",
    "Name": "Structured Display Background CIELab Value",
    "Keyword": "StructuredDisplayBackgroundCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0072,0421)",
    "Name": "Empty Image Box CIELab Value",
    "Keyword": "EmptyImageBoxCIELabValue",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0072,0422)",
    "Name": "Structured Display Image Box Sequence",
    "Keyword": "StructuredDisplayImageBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0424)",
    "Name": "Structured Display Text Box Sequence",
    "Keyword": "StructuredDisplayTextBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0427)",
    "Name": "Referenced First Frame Sequence",
    "Keyword": "ReferencedFirstFrameSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0430)",
    "Name": "Image Box Synchronization Sequence",
    "Keyword": "ImageBoxSynchronizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0432)",
    "Name": "Synchronized Image Box List",
    "Keyword": "SynchronizedImageBoxList",
    "VR": "US",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0434)",
    "Name": "Type of Synchronization",
    "Keyword": "TypeOfSynchronization",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0500)",
    "Name": "Blending Operation Type",
    "Keyword": "BlendingOperationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0510)",
    "Name": "Reformatting Operation Type",
    "Keyword": "ReformattingOperationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0512)",
    "Name": "Reformatting Thickness",
    "Keyword": "ReformattingThickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0514)",
    "Name": "Reformatting Interval",
    "Keyword": "ReformattingInterval",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0516)",
    "Name": "Reformatting Operation Initial View Direction",
    "Keyword": "ReformattingOperationInitialViewDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0520)",
    "Name": "3D Rendering Type",
    "Keyword": "ThreeDRenderingType",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0600)",
    "Name": "Sorting Operations Sequence",
    "Keyword": "SortingOperationsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0602)",
    "Name": "Sort-by Category",
    "Keyword": "SortByCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0604)",
    "Name": "Sorting Direction",
    "Keyword": "SortingDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0700)",
    "Name": "Display Set Patient Orientation",
    "Keyword": "DisplaySetPatientOrientation",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,0702)",
    "Name": "VOI Type",
    "Keyword": "VOIType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0704)",
    "Name": "Pseudo-Color Type",
    "Keyword": "PseudoColorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0705)",
    "Name": "Pseudo-Color Palette Instance Reference Sequence",
    "Keyword": "PseudoColorPaletteInstanceReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0706)",
    "Name": "Show Grayscale Inverted",
    "Keyword": "ShowGrayscaleInverted",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0710)",
    "Name": "Show Image True Size Flag",
    "Keyword": "ShowImageTrueSizeFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0712)",
    "Name": "Show Graphic Annotation Flag",
    "Keyword": "ShowGraphicAnnotationFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0714)",
    "Name": "Show Patient Demographics Flag",
    "Keyword": "ShowPatientDemographicsFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0716)",
    "Name": "Show Acquisition Techniques Flag",
    "Keyword": "ShowAcquisitionTechniquesFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0717)",
    "Name": "Display Set Horizontal Justification",
    "Keyword": "DisplaySetHorizontalJustification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0718)",
    "Name": "Display Set Vertical Justification",
    "Keyword": "DisplaySetVerticalJustification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,0120)",
    "Name": "Continuation Start Meterset",
    "Keyword": "ContinuationStartMeterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,0121)",
    "Name": "Continuation End Meterset",
    "Keyword": "ContinuationEndMeterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1000)",
    "Name": "Procedure Step State",
    "Keyword": "ProcedureStepState",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1002)",
    "Name": "Procedure Step Progress Information Sequence",
    "Keyword": "ProcedureStepProgressInformationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1004)",
    "Name": "Procedure Step Progress",
    "Keyword": "ProcedureStepProgress",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1006)",
    "Name": "Procedure Step Progress Description",
    "Keyword": "ProcedureStepProgressDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1008)",
    "Name": "Procedure Step Communications URI Sequence",
    "Keyword": "ProcedureStepCommunicationsURISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100a)",
    "Name": "Contact URI",
    "Keyword": "ContactURI",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100c)",
    "Name": "Contact Display Name",
    "Keyword": "ContactDisplayName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100e)",
    "Name": "Procedure Step Discontinuation Reason Code Sequence",
    "Keyword": "ProcedureStepDiscontinuationReasonCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1020)",
    "Name": "Beam Task Sequence",
    "Keyword": "BeamTaskSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1022)",
    "Name": "Beam Task Type",
    "Keyword": "BeamTaskType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1024)",
    "Name": "Beam Order Index (Trial)",
    "Keyword": "BeamOrderIndexTrial",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1025)",
    "Name": "Autosequence Flag",
    "Keyword": "AutosequenceFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1026)",
    "Name": "Table Top Vertical Adjusted Position",
    "Keyword": "TableTopVerticalAdjustedPosition",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1027)",
    "Name": "Table Top Longitudinal Adjusted Position",
    "Keyword": "TableTopLongitudinalAdjustedPosition",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1028)",
    "Name": "Table Top Lateral Adjusted Position",
    "Keyword": "TableTopLateralAdjustedPosition",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102A)",
    "Name": "Patient Support Adjusted Angle",
    "Keyword": "PatientSupportAdjustedAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102B)",
    "Name": "Table Top Eccentric Adjusted Angle",
    "Keyword": "TableTopEccentricAdjustedAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102C)",
    "Name": "Table Top Pitch Adjusted Angle",
    "Keyword": "TableTopPitchAdjustedAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102D)",
    "Name": "Table Top Roll Adjusted Angle",
    "Keyword": "TableTopRollAdjustedAngle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1030)",
    "Name": "Delivery Verification Image Sequence",
    "Keyword": "DeliveryVerificationImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1032)",
    "Name": "Verification Image Timing",
    "Keyword": "VerificationImageTiming",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1034)",
    "Name": "Double Exposure Flag",
    "Keyword": "DoubleExposureFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1036)",
    "Name": "Double Exposure Ordering",
    "Keyword": "DoubleExposureOrdering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1038)",
    "Name": "Double Exposure Meterset (Trial)",
    "Keyword": "DoubleExposureMetersetTrial",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,103A)",
    "Name": "Double Exposure Field Delta (Trial)",
    "Keyword": "DoubleExposureFieldDeltaTrial",
    "VR": "DS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1040)",
    "Name": "Related Reference RT Image Sequence",
    "Keyword": "RelatedReferenceRTImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1042)",
    "Name": "General Machine Verification Sequence",
    "Keyword": "GeneralMachineVerificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1044)",
    "Name": "Conventional Machine Verification Sequence",
    "Keyword": "ConventionalMachineVerificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1046)",
    "Name": "Ion Machine Verification Sequence",
    "Keyword": "IonMachineVerificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1048)",
    "Name": "Failed Attributes Sequence",
    "Keyword": "FailedAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104A)",
    "Name": "Overridden Attributes Sequence",
    "Keyword": "OverriddenAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104C)",
    "Name": "Conventional Control Point Verification Sequence",
    "Keyword": "ConventionalControlPointVerificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104E)",
    "Name": "Ion Control Point Verification Sequence",
    "Keyword": "IonControlPointVerificationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1050)",
    "Name": "Attribute Occurrence Sequence",
    "Keyword": "AttributeOccurrenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1052)",
    "Name": "Attribute Occurrence Pointer",
    "Keyword": "AttributeOccurrencePointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1054)",
    "Name": "Attribute Item Selector",
    "Keyword": "AttributeItemSelector",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1056)",
    "Name": "Attribute Occurrence Private Creator",
    "Keyword": "AttributeOccurrencePrivateCreator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1057)",
    "Name": "Selector Sequence Pointer Items",
    "Keyword": "SelectorSequencePointerItems",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0074,1200)",
    "Name": "Scheduled Procedure Step Priority",
    "Keyword": "ScheduledProcedureStepPriority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1202)",
    "Name": "Worklist Label",
    "Keyword": "WorklistLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1204)",
    "Name": "Procedure Step Label",
    "Keyword": "ProcedureStepLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1210)",
    "Name": "Scheduled Processing Parameters Sequence",
    "Keyword": "ScheduledProcessingParametersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1212)",
    "Name": "Performed Processing Parameters Sequence",
    "Keyword": "PerformedProcessingParametersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1216)",
    "Name": "Unified Procedure Step Performed Procedure Sequence",
    "Keyword": "UnifiedProcedureStepPerformedProcedureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1220)",
    "Name": "Related Procedure Step Sequence",
    "Keyword": "RelatedProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1222)",
    "Name": "Procedure Step Relationship Type",
    "Keyword": "ProcedureStepRelationshipType",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1224)",
    "Name": "Replaced Procedure Step Sequence",
    "Keyword": "ReplacedProcedureStepSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1230)",
    "Name": "Deletion Lock",
    "Keyword": "DeletionLock",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1234)",
    "Name": "Receiving AE",
    "Keyword": "ReceivingAE",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1236)",
    "Name": "Requesting AE",
    "Keyword": "RequestingAE",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1238)",
    "Name": "Reason for Cancellation",
    "Keyword": "ReasonForCancellation",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1242)",
    "Name": "SCP Status",
    "Keyword": "SCPStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1244)",
    "Name": "Subscription List Status",
    "Keyword": "SubscriptionListStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1246)",
    "Name": "Unified Procedure StepList Status",
    "Keyword": "UnifiedProcedureStepListStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1324)",
    "Name": "Beam Order Index",
    "Keyword": "BeamOrderIndex",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1338)",
    "Name": "Double Exposure Meterset",
    "Keyword": "DoubleExposureMeterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,133A)",
    "Name": "Double Exposure Field Delta",
    "Keyword": "DoubleExposureFieldDelta",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0076,0001)",
    "Name": "Implant Assembly Template Name",
    "Keyword": "ImplantAssemblyTemplateName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0003)",
    "Name": "Implant Assembly Template Issuer",
    "Keyword": "ImplantAssemblyTemplateIssuer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0006)",
    "Name": "Implant Assembly Template Version",
    "Keyword": "ImplantAssemblyTemplateVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0008)",
    "Name": "Replaced Implant Assembly Template Sequence",
    "Keyword": "ReplacedImplantAssemblyTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000A)",
    "Name": "Implant Assembly Template Type",
    "Keyword": "ImplantAssemblyTemplateType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000C)",
    "Name": "Original Implant Assembly Template Sequence",
    "Keyword": "OriginalImplantAssemblyTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000E)",
    "Name": "Derivation Implant Assembly Template Sequence",
    "Keyword": "DerivationImplantAssemblyTemplateSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0010)",
    "Name": "Implant Assembly Template Target Anatomy Sequence",
    "Keyword": "ImplantAssemblyTemplateTargetAnatomySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0020)",
    "Name": "Procedure Type Code Sequence",
    "Keyword": "ProcedureTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0030)",
    "Name": "Surgical Technique",
    "Keyword": "SurgicalTechnique",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0032)",
    "Name": "Component Types Sequence",
    "Keyword": "ComponentTypesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0034)",
    "Name": "Component Type Code Sequence",
    "Keyword": "ComponentTypeCodeSequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0036)",
    "Name": "Exclusive Component Type",
    "Keyword": "ExclusiveComponentType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0038)",
    "Name": "Mandatory Component Type",
    "Keyword": "MandatoryComponentType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0040)",
    "Name": "Component Sequence",
    "Keyword": "ComponentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0055)",
    "Name": "Component ID",
    "Keyword": "ComponentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0060)",
    "Name": "Component Assembly Sequence",
    "Keyword": "ComponentAssemblySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0070)",
    "Name": "Component 1 Referenced ID",
    "Keyword": "Component1ReferencedID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0080)",
    "Name": "Component 1 Referenced Mating Feature Set ID",
    "Keyword": "Component1ReferencedMatingFeatureSetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0090)",
    "Name": "Component 1 Referenced Mating Feature ID",
    "Keyword": "Component1ReferencedMatingFeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00A0)",
    "Name": "Component 2 Referenced ID",
    "Keyword": "Component2ReferencedID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00B0)",
    "Name": "Component 2 Referenced Mating Feature Set ID",
    "Keyword": "Component2ReferencedMatingFeatureSetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00C0)",
    "Name": "Component 2 Referenced Mating Feature ID",
    "Keyword": "Component2ReferencedMatingFeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0001)",
    "Name": "Implant Template Group Name",
    "Keyword": "ImplantTemplateGroupName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0010)",
    "Name": "Implant Template Group Description",
    "Keyword": "ImplantTemplateGroupDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0020)",
    "Name": "Implant Template Group Issuer",
    "Keyword": "ImplantTemplateGroupIssuer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0024)",
    "Name": "Implant Template Group Version",
    "Keyword": "ImplantTemplateGroupVersion",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0026)",
    "Name": "Replaced Implant Template Group Sequence",
    "Keyword": "ReplacedImplantTemplateGroupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0028)",
    "Name": "Implant Template Group Target Anatomy Sequence",
    "Keyword": "ImplantTemplateGroupTargetAnatomySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,002A)",
    "Name": "Implant Template Group Members Sequence",
    "Keyword": "ImplantTemplateGroupMembersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,002E)",
    "Name": "Implant Template Group Member ID",
    "Keyword": "ImplantTemplateGroupMemberID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0050)",
    "Name": "3D Implant Template Group Member Matching Point",
    "Keyword": "ThreeDImplantTemplateGroupMemberMatchingPoint",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0078,0060)",
    "Name": "3D Implant Template Group Member Matching Axes",
    "Keyword": "ThreeDImplantTemplateGroupMemberMatchingAxes",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0078,0070)",
    "Name": "Implant Template Group Member Matching 2D Coordinates Sequence",
    "Keyword": "ImplantTemplateGroupMemberMatching2DCoordinatesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0090)",
    "Name": "2D Implant Template Group Member Matching Point",
    "Keyword": "TwoDImplantTemplateGroupMemberMatchingPoint",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0078,00A0)",
    "Name": "2D Implant Template Group Member Matching Axes",
    "Keyword": "TwoDImplantTemplateGroupMemberMatchingAxes",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B0)",
    "Name": "Implant Template Group Variation Dimension Sequence",
    "Keyword": "ImplantTemplateGroupVariationDimensionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B2)",
    "Name": "Implant Template Group Variation Dimension Name",
    "Keyword": "ImplantTemplateGroupVariationDimensionName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B4)",
    "Name": "Implant Template Group Variation Dimension Rank Sequence",
    "Keyword": "ImplantTemplateGroupVariationDimensionRankSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B6)",
    "Name": "Referenced Implant Template Group Member ID",
    "Keyword": "ReferencedImplantTemplateGroupMemberID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B8)",
    "Name": "Implant Template Group Variation Dimension Rank",
    "Keyword": "ImplantTemplateGroupVariationDimensionRank",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0001)",
    "Name": "Surface Scan Acquisition Type Code Sequence",
    "Keyword": "SurfaceScanAcquisitionTypeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0002)",
    "Name": "Surface Scan Mode Code Sequence",
    "Keyword": "SurfaceScanModeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0003)",
    "Name": "Registration Method Code Sequence",
    "Keyword": "RegistrationMethodCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0004)",
    "Name": "Shot Duration Time",
    "Keyword": "ShotDurationTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0005)",
    "Name": "Shot Offset Time",
    "Keyword": "ShotOffsetTime",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0006)",
    "Name": "Surface Point Presentation Value Data",
    "Keyword": "SurfacePointPresentationValueData",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0007)",
    "Name": "Surface Point Color CIELab Value Data",
    "Keyword": "SurfacePointColorCIELabValueData",
    "VR": "US",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0008)",
    "Name": "UV Mapping Sequence",
    "Keyword": "UVMappingSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0009)",
    "Name": "Texture Label",
    "Keyword": "TextureLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0010)",
    "Name": "U Value Data",
    "Keyword": "UValueData",
    "VR": "OF",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0011)",
    "Name": "V Value Data",
    "Keyword": "VValueData",
    "VR": "OF",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0012)",
    "Name": "Referenced Texture Sequence",
    "Keyword": "ReferencedTextureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0013)",
    "Name": "Referenced Surface Data Sequence",
    "Keyword": "ReferencedSurfaceDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0130)",
    "Name": "Storage Media File-set ID",
    "Keyword": "StorageMediaFileSetID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0140)",
    "Name": "Storage Media File-set UID",
    "Keyword": "StorageMediaFileSetUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0200)",
    "Name": "Icon Image Sequence",
    "Keyword": "IconImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0904)",
    "Name": "Topic Title",
    "Keyword": "TopicTitle",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0906)",
    "Name": "Topic Subject",
    "Keyword": "TopicSubject",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0910)",
    "Name": "Topic Author",
    "Keyword": "TopicAuthor",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0912)",
    "Name": "Topic Keywords",
    "Keyword": "TopicKeywords",
    "VR": "LO",
    "VM": "1-32",
    "Retired": "RET"
  },
  {
    "Tag": "(0100,0410)",
    "Name": "SOP Instance Status",
    "Keyword": "SOPInstanceStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0420)",
    "Name": "SOP Authorization DateTime",
    "Keyword": "SOPAuthorizationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0424)",
    "Name": "SOP Authorization Comment",
    "Keyword": "SOPAuthorizationComment",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0426)",
    "Name": "Authorization Equipment Certification Number",
    "Keyword": "AuthorizationEquipmentCertificationNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0005)",
    "Name": "MAC ID Number",
    "Keyword": "MACIDNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0010)",
    "Name": "MAC Calculation Transfer Syntax UID",
    "Keyword": "MACCalculationTransferSyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0015)",
    "Name": "MAC Algorithm",
    "Keyword": "MACAlgorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0020)",
    "Name": "Data Elements Signed",
    "Keyword": "DataElementsSigned",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0400,0100)",
    "Name": "Digital Signature UID",
    "Keyword": "DigitalSignatureUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0105)",
    "Name": "Digital Signature DateTime",
    "Keyword": "DigitalSignatureDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0110)",
    "Name": "Certificate Type",
    "Keyword": "CertificateType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0115)",
    "Name": "Certificate of Signer",
    "Keyword": "CertificateOfSigner",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0120)",
    "Name": "Signature",
    "Keyword": "Signature",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0305)",
    "Name": "Certified Timestamp Type",
    "Keyword": "CertifiedTimestampType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0310)",
    "Name": "Certified Timestamp",
    "Keyword": "CertifiedTimestamp",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0401)",
    "Name": "Digital Signature Purpose Code Sequence",
    "Keyword": "DigitalSignaturePurposeCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0402)",
    "Name": "Referenced Digital Signature Sequence",
    "Keyword": "ReferencedDigitalSignatureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0403)",
    "Name": "Referenced SOP Instance MAC Sequence",
    "Keyword": "ReferencedSOPInstanceMACSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0404)",
    "Name": "MAC",
    "Keyword": "MAC",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0500)",
    "Name": "Encrypted Attributes Sequence",
    "Keyword": "EncryptedAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0510)",
    "Name": "Encrypted Content Transfer Syntax UID",
    "Keyword": "EncryptedContentTransferSyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0520)",
    "Name": "Encrypted Content",
    "Keyword": "EncryptedContent",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0550)",
    "Name": "Modified Attributes Sequence",
    "Keyword": "ModifiedAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0561)",
    "Name": "Original Attributes Sequence",
    "Keyword": "OriginalAttributesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0562)",
    "Name": "Attribute Modification DateTime",
    "Keyword": "AttributeModificationDateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0563)",
    "Name": "Modifying System",
    "Keyword": "ModifyingSystem",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0564)",
    "Name": "Source of Previous Values",
    "Keyword": "SourceOfPreviousValues",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0565)",
    "Name": "Reason for the Attribute Modification",
    "Keyword": "ReasonForTheAttributeModification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(1000,xxx0)",
    "Name": "Escape Triplet",
    "Keyword": "EscapeTriplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx1)",
    "Name": "Run Length Triplet",
    "Keyword": "RunLengthTriplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx2)",
    "Name": "Huffman Table Size",
    "Keyword": "HuffmanTableSize",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx3)",
    "Name": "Huffman Table Triplet",
    "Keyword": "HuffmanTableTriplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx4)",
    "Name": "Shift Table Size",
    "Keyword": "ShiftTableSize",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx5)",
    "Name": "Shift Table Triplet",
    "Keyword": "ShiftTableTriplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1010,xxxx)",
    "Name": "Zonal Map",
    "Keyword": "ZonalMap",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0010)",
    "Name": "Number of Copies",
    "Keyword": "NumberOfCopies",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,001E)",
    "Name": "Printer Configuration Sequence",
    "Keyword": "PrinterConfigurationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0020)",
    "Name": "Print Priority",
    "Keyword": "PrintPriority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0030)",
    "Name": "Medium Type",
    "Keyword": "MediumType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0040)",
    "Name": "Film Destination",
    "Keyword": "FilmDestination",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0050)",
    "Name": "Film Session Label",
    "Keyword": "FilmSessionLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0060)",
    "Name": "Memory Allocation",
    "Keyword": "MemoryAllocation",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0061)",
    "Name": "Maximum Memory Allocation",
    "Keyword": "MaximumMemoryAllocation",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0062)",
    "Name": "Color Image Printing Flag",
    "Keyword": "ColorImagePrintingFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0063)",
    "Name": "Collation Flag",
    "Keyword": "CollationFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0065)",
    "Name": "Annotation Flag",
    "Keyword": "AnnotationFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0067)",
    "Name": "Image Overlay Flag",
    "Keyword": "ImageOverlayFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0069)",
    "Name": "Presentation LUT Flag",
    "Keyword": "PresentationLUTFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,006A)",
    "Name": "Image Box Presentation LUT Flag",
    "Keyword": "ImageBoxPresentationLUTFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,00A0)",
    "Name": "Memory Bit Depth",
    "Keyword": "MemoryBitDepth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A1)",
    "Name": "Printing Bit Depth",
    "Keyword": "PrintingBitDepth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A2)",
    "Name": "Media Installed Sequence",
    "Keyword": "MediaInstalledSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A4)",
    "Name": "Other Media Available Sequence",
    "Keyword": "OtherMediaAvailableSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A8)",
    "Name": "Supported Image Display Formats Sequence",
    "Keyword": "SupportedImageDisplayFormatsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0500)",
    "Name": "Referenced Film Box Sequence",
    "Keyword": "ReferencedFilmBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0510)",
    "Name": "Referenced Stored Print Sequence",
    "Keyword": "ReferencedStoredPrintSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2010,0010)",
    "Name": "Image Display Format",
    "Keyword": "ImageDisplayFormat",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0030)",
    "Name": "Annotation Display Format ID",
    "Keyword": "AnnotationDisplayFormatID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0040)",
    "Name": "Film Orientation",
    "Keyword": "FilmOrientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0050)",
    "Name": "Film Size ID",
    "Keyword": "FilmSizeID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0052)",
    "Name": "Printer Resolution ID",
    "Keyword": "PrinterResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0054)",
    "Name": "Default Printer Resolution ID",
    "Keyword": "DefaultPrinterResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0060)",
    "Name": "Magnification Type",
    "Keyword": "MagnificationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0080)",
    "Name": "Smoothing Type",
    "Keyword": "SmoothingType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A6)",
    "Name": "Default Magnification Type",
    "Keyword": "DefaultMagnificationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A7)",
    "Name": "Other Magnification Types Available",
    "Keyword": "OtherMagnificationTypesAvailable",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A8)",
    "Name": "Default Smoothing Type",
    "Keyword": "DefaultSmoothingType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A9)",
    "Name": "Other Smoothing Types Available",
    "Keyword": "OtherSmoothingTypesAvailable",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2010,0100)",
    "Name": "Border Density",
    "Keyword": "BorderDensity",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0110)",
    "Name": "Empty Image Density",
    "Keyword": "EmptyImageDensity",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0120)",
    "Name": "Min Density",
    "Keyword": "MinDensity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0130)",
    "Name": "Max Density",
    "Keyword": "MaxDensity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0140)",
    "Name": "Trim",
    "Keyword": "Trim",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0150)",
    "Name": "Configuration Information",
    "Keyword": "ConfigurationInformation",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0152)",
    "Name": "Configuration Information Description",
    "Keyword": "ConfigurationInformationDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0154)",
    "Name": "Maximum Collated Films",
    "Keyword": "MaximumCollatedFilms",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,015E)",
    "Name": "Illumination",
    "Keyword": "Illumination",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0160)",
    "Name": "Reflected Ambient Light",
    "Keyword": "ReflectedAmbientLight",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0376)",
    "Name": "Printer Pixel Spacing",
    "Keyword": "PrinterPixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(2010,0500)",
    "Name": "Referenced Film Session Sequence",
    "Keyword": "ReferencedFilmSessionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0510)",
    "Name": "Referenced Image Box Sequence",
    "Keyword": "ReferencedImageBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0520)",
    "Name": "Referenced Basic Annotation Box Sequence",
    "Keyword": "ReferencedBasicAnnotationBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0010)",
    "Name": "Image Box Position",
    "Keyword": "ImageBoxPosition",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0020)",
    "Name": "Polarity",
    "Keyword": "Polarity",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0030)",
    "Name": "Requested Image Size",
    "Keyword": "RequestedImageSize",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0040)",
    "Name": "Requested Decimate/Crop Behavior",
    "Keyword": "RequestedDecimateCropBehavior",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0050)",
    "Name": "Requested Resolution ID",
    "Keyword": "RequestedResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,00A0)",
    "Name": "Requested Image Size Flag",
    "Keyword": "RequestedImageSizeFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,00A2)",
    "Name": "Decimate/Crop Result",
    "Keyword": "DecimateCropResult",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0110)",
    "Name": "Basic Grayscale Image Sequence",
    "Keyword": "BasicGrayscaleImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0111)",
    "Name": "Basic Color Image Sequence",
    "Keyword": "BasicColorImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0130)",
    "Name": "Referenced Image Overlay Box Sequence",
    "Keyword": "ReferencedImageOverlayBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2020,0140)",
    "Name": "Referenced VOI LUT Box Sequence",
    "Keyword": "ReferencedVOILUTBoxSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2030,0010)",
    "Name": "Annotation Position",
    "Keyword": "AnnotationPosition",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2030,0020)",
    "Name": "Text String",
    "Keyword": "TextString",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2040,0010)",
    "Name": "Referenced Overlay Plane Sequence",
    "Keyword": "ReferencedOverlayPlaneSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0011)",
    "Name": "Referenced Overlay Plane Groups",
    "Keyword": "ReferencedOverlayPlaneGroups",
    "VR": "US",
    "VM": "1-99",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0020)",
    "Name": "Overlay Pixel Data Sequence",
    "Keyword": "OverlayPixelDataSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0060)",
    "Name": "Overlay Magnification Type",
    "Keyword": "OverlayMagnificationType",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0070)",
    "Name": "Overlay Smoothing Type",
    "Keyword": "OverlaySmoothingType",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0072)",
    "Name": "Overlay or Image Magnification",
    "Keyword": "OverlayOrImageMagnification",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0074)",
    "Name": "Magnify to Number of Columns",
    "Keyword": "MagnifyToNumberOfColumns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0080)",
    "Name": "Overlay Foreground Density",
    "Keyword": "OverlayForegroundDensity",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0082)",
    "Name": "Overlay Background Density",
    "Keyword": "OverlayBackgroundDensity",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0090)",
    "Name": "Overlay Mode",
    "Keyword": "OverlayMode",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0100)",
    "Name": "Threshold Density",
    "Keyword": "ThresholdDensity",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0500)",
    "Name": "Referenced Image Box Sequence (Retired)",
    "Keyword": "ReferencedImageBoxSequenceRetired",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2050,0010)",
    "Name": "Presentation LUT Sequence",
    "Keyword": "PresentationLUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2050,0020)",
    "Name": "Presentation LUT Shape",
    "Keyword": "PresentationLUTShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2050,0500)",
    "Name": "Referenced Presentation LUT Sequence",
    "Keyword": "ReferencedPresentationLUTSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0010)",
    "Name": "Print Job ID",
    "Keyword": "PrintJobID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2100,0020)",
    "Name": "Execution Status",
    "Keyword": "ExecutionStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0030)",
    "Name": "Execution Status Info",
    "Keyword": "ExecutionStatusInfo",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0040)",
    "Name": "Creation Date",
    "Keyword": "CreationDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0050)",
    "Name": "Creation Time",
    "Keyword": "CreationTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0070)",
    "Name": "Originator",
    "Keyword": "Originator",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0140)",
    "Name": "Destination AE",
    "Keyword": "DestinationAE",
    "VR": "AE",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2100,0160)",
    "Name": "Owner ID",
    "Keyword": "OwnerID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0170)",
    "Name": "Number of Films",
    "Keyword": "NumberOfFilms",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0500)",
    "Name": "Referenced Print Job Sequence (Pull Stored Print)",
    "Keyword": "ReferencedPrintJobSequencePullStoredPrint",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2110,0010)",
    "Name": "Printer Status",
    "Keyword": "PrinterStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0020)",
    "Name": "Printer Status Info",
    "Keyword": "PrinterStatusInfo",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0030)",
    "Name": "Printer Name",
    "Keyword": "PrinterName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0099)",
    "Name": "Print Queue ID",
    "Keyword": "PrintQueueID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0010)",
    "Name": "Queue Status",
    "Keyword": "QueueStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0050)",
    "Name": "Print Job Description Sequence",
    "Keyword": "PrintJobDescriptionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0070)",
    "Name": "Referenced Print Job Sequence",
    "Keyword": "ReferencedPrintJobSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0010)",
    "Name": "Print Management Capabilities Sequence",
    "Keyword": "PrintManagementCapabilitiesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0015)",
    "Name": "Printer Characteristics Sequence",
    "Keyword": "PrinterCharacteristicsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0030)",
    "Name": "Film Box Content Sequence",
    "Keyword": "FilmBoxContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0040)",
    "Name": "Image Box Content Sequence",
    "Keyword": "ImageBoxContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0050)",
    "Name": "Annotation Content Sequence",
    "Keyword": "AnnotationContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0060)",
    "Name": "Image Overlay Box Content Sequence",
    "Keyword": "ImageOverlayBoxContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0080)",
    "Name": "Presentation LUT Content Sequence",
    "Keyword": "PresentationLUTContentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,00A0)",
    "Name": "Proposed Study Sequence",
    "Keyword": "ProposedStudySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,00C0)",
    "Name": "Original Image Sequence",
    "Keyword": "OriginalImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2200,0001)",
    "Name": "Label Using Information Extracted From Instances",
    "Keyword": "LabelUsingInformationExtractedFromInstances",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0002)",
    "Name": "Label Text",
    "Keyword": "LabelText",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0003)",
    "Name": "Label Style Selection",
    "Keyword": "LabelStyleSelection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0004)",
    "Name": "Media Disposition",
    "Keyword": "MediaDisposition",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0005)",
    "Name": "Barcode Value",
    "Keyword": "BarcodeValue",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0006)",
    "Name": "Barcode Symbology",
    "Keyword": "BarcodeSymbology",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0007)",
    "Name": "Allow Media Splitting",
    "Keyword": "AllowMediaSplitting",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0008)",
    "Name": "Include Non-DICOM Objects",
    "Keyword": "IncludeNonDICOMObjects",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0009)",
    "Name": "Include Display Application",
    "Keyword": "IncludeDisplayApplication",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000A)",
    "Name": "Preserve Composite Instances After Media Creation",
    "Keyword": "PreserveCompositeInstancesAfterMediaCreation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000B)",
    "Name": "Total Number of Pieces of Media Created",
    "Keyword": "TotalNumberOfPiecesOfMediaCreated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000C)",
    "Name": "Requested Media Application Profile",
    "Keyword": "RequestedMediaApplicationProfile",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000D)",
    "Name": "Referenced Storage Media Sequence",
    "Keyword": "ReferencedStorageMediaSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000E)",
    "Name": "Failure Attributes",
    "Keyword": "FailureAttributes",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2200,000F)",
    "Name": "Allow Lossy Compression",
    "Keyword": "AllowLossyCompression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0020)",
    "Name": "Request Priority",
    "Keyword": "RequestPriority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0002)",
    "Name": "RT Image Label",
    "Keyword": "RTImageLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0003)",
    "Name": "RT Image Name",
    "Keyword": "RTImageName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0004)",
    "Name": "RT Image Description",
    "Keyword": "RTImageDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000A)",
    "Name": "Reported Values Origin",
    "Keyword": "ReportedValuesOrigin",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000C)",
    "Name": "RT Image Plane",
    "Keyword": "RTImagePlane",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000D)",
    "Name": "X-Ray Image Receptor Translation",
    "Keyword": "XRayImageReceptorTranslation",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3002,000E)",
    "Name": "X-Ray Image Receptor Angle",
    "Keyword": "XRayImageReceptorAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0010)",
    "Name": "RT Image Orientation",
    "Keyword": "RTImageOrientation",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(3002,0011)",
    "Name": "Image Plane Pixel Spacing",
    "Keyword": "ImagePlanePixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(3002,0012)",
    "Name": "RT Image Position",
    "Keyword": "RTImagePosition",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(3002,0020)",
    "Name": "Radiation Machine Name",
    "Keyword": "RadiationMachineName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0022)",
    "Name": "Radiation Machine SAD",
    "Keyword": "RadiationMachineSAD",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0024)",
    "Name": "Radiation Machine SSD",
    "Keyword": "RadiationMachineSSD",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0026)",
    "Name": "RT Image SID",
    "Keyword": "RTImageSID",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0028)",
    "Name": "Source to Reference Object Distance",
    "Keyword": "SourceToReferenceObjectDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0029)",
    "Name": "Fraction Number",
    "Keyword": "FractionNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0030)",
    "Name": "Exposure Sequence",
    "Keyword": "ExposureSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0032)",
    "Name": "Meterset Exposure",
    "Keyword": "MetersetExposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0034)",
    "Name": "Diaphragm Position",
    "Keyword": "DiaphragmPosition",
    "VR": "DS",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(3002,0040)",
    "Name": "Fluence Map Sequence",
    "Keyword": "FluenceMapSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0041)",
    "Name": "Fluence Data Source",
    "Keyword": "FluenceDataSource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0042)",
    "Name": "Fluence Data Scale",
    "Keyword": "FluenceDataScale",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0050)",
    "Name": "Primary Fluence Mode Sequence",
    "Keyword": "PrimaryFluenceModeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0051)",
    "Name": "Fluence Mode",
    "Keyword": "FluenceMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0052)",
    "Name": "Fluence Mode ID",
    "Keyword": "FluenceModeID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0001)",
    "Name": "DVH Type",
    "Keyword": "DVHType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0002)",
    "Name": "Dose Units",
    "Keyword": "DoseUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0004)",
    "Name": "Dose Type",
    "Keyword": "DoseType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0005)",
    "Name": "Spatial Transform of Dose",
    "Keyword": "SpatialTransformOfDose",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0006)",
    "Name": "Dose Comment",
    "Keyword": "DoseComment",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0008)",
    "Name": "Normalization Point",
    "Keyword": "NormalizationPoint",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3004,000A)",
    "Name": "Dose Summation Type",
    "Keyword": "DoseSummationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,000C)",
    "Name": "Grid Frame Offset Vector",
    "Keyword": "GridFrameOffsetVector",
    "VR": "DS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(3004,000E)",
    "Name": "Dose Grid Scaling",
    "Keyword": "DoseGridScaling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0010)",
    "Name": "RT Dose ROI Sequence",
    "Keyword": "RTDoseROISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0012)",
    "Name": "Dose Value",
    "Keyword": "DoseValue",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0014)",
    "Name": "Tissue Heterogeneity Correction",
    "Keyword": "TissueHeterogeneityCorrection",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(3004,0040)",
    "Name": "DVH Normalization Point",
    "Keyword": "DVHNormalizationPoint",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3004,0042)",
    "Name": "DVH Normalization Dose Value",
    "Keyword": "DVHNormalizationDoseValue",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0050)",
    "Name": "DVH Sequence",
    "Keyword": "DVHSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0052)",
    "Name": "DVH Dose Scaling",
    "Keyword": "DVHDoseScaling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0054)",
    "Name": "DVH Volume Units",
    "Keyword": "DVHVolumeUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0056)",
    "Name": "DVH Number of Bins",
    "Keyword": "DVHNumberOfBins",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0058)",
    "Name": "DVH Data",
    "Keyword": "DVHData",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(3004,0060)",
    "Name": "DVH Referenced ROI Sequence",
    "Keyword": "DVHReferencedROISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0062)",
    "Name": "DVH ROI Contribution Type",
    "Keyword": "DVHROIContributionType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0070)",
    "Name": "DVH Minimum Dose",
    "Keyword": "DVHMinimumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0072)",
    "Name": "DVH Maximum Dose",
    "Keyword": "DVHMaximumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0074)",
    "Name": "DVH Mean Dose",
    "Keyword": "DVHMeanDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0002)",
    "Name": "Structure Set Label",
    "Keyword": "StructureSetLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0004)",
    "Name": "Structure Set Name",
    "Keyword": "StructureSetName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0006)",
    "Name": "Structure Set Description",
    "Keyword": "StructureSetDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0008)",
    "Name": "Structure Set Date",
    "Keyword": "StructureSetDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0009)",
    "Name": "Structure Set Time",
    "Keyword": "StructureSetTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0010)",
    "Name": "Referenced Frame of Reference Sequence",
    "Keyword": "ReferencedFrameOfReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0012)",
    "Name": "RT Referenced Study Sequence",
    "Keyword": "RTReferencedStudySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0014)",
    "Name": "RT Referenced Series Sequence",
    "Keyword": "RTReferencedSeriesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0016)",
    "Name": "Contour Image Sequence",
    "Keyword": "ContourImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0018)",
    "Name": "Predecessor Structure Set Sequence",
    "Keyword": "PredecessorStructureSetSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0020)",
    "Name": "Structure Set ROI Sequence",
    "Keyword": "StructureSetROISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0022)",
    "Name": "ROI Number",
    "Keyword": "ROINumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0024)",
    "Name": "Referenced Frame of Reference UID",
    "Keyword": "ReferencedFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0026)",
    "Name": "ROI Name",
    "Keyword": "ROIName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0028)",
    "Name": "ROI Description",
    "Keyword": "ROIDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,002A)",
    "Name": "ROI Display Color",
    "Keyword": "ROIDisplayColor",
    "VR": "IS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3006,002C)",
    "Name": "ROI Volume",
    "Keyword": "ROIVolume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0030)",
    "Name": "RT Related ROI Sequence",
    "Keyword": "RTRelatedROISequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0033)",
    "Name": "RT ROI Relationship",
    "Keyword": "RTROIRelationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0036)",
    "Name": "ROI Generation Algorithm",
    "Keyword": "ROIGenerationAlgorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0038)",
    "Name": "ROI Generation Description",
    "Keyword": "ROIGenerationDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0039)",
    "Name": "ROI Contour Sequence",
    "Keyword": "ROIContourSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0040)",
    "Name": "Contour Sequence",
    "Keyword": "ContourSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0042)",
    "Name": "Contour Geometric Type",
    "Keyword": "ContourGeometricType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0044)",
    "Name": "Contour Slab Thickness",
    "Keyword": "ContourSlabThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0045)",
    "Name": "Contour Offset Vector",
    "Keyword": "ContourOffsetVector",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3006,0046)",
    "Name": "Number of Contour Points",
    "Keyword": "NumberOfContourPoints",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0048)",
    "Name": "Contour Number",
    "Keyword": "ContourNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0049)",
    "Name": "Attached Contours",
    "Keyword": "AttachedContours",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(3006,0050)",
    "Name": "Contour Data",
    "Keyword": "ContourData",
    "VR": "DS",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(3006,0080)",
    "Name": "RT ROI Observations Sequence",
    "Keyword": "RTROIObservationsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0082)",
    "Name": "Observation Number",
    "Keyword": "ObservationNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0084)",
    "Name": "Referenced ROI Number",
    "Keyword": "ReferencedROINumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0085)",
    "Name": "ROI Observation Label",
    "Keyword": "ROIObservationLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0086)",
    "Name": "RT ROI Identification Code Sequence",
    "Keyword": "RTROIIdentificationCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0088)",
    "Name": "ROI Observation Description",
    "Keyword": "ROIObservationDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A0)",
    "Name": "Related RT ROI Observations Sequence",
    "Keyword": "RelatedRTROIObservationsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A4)",
    "Name": "RT ROI Interpreted Type",
    "Keyword": "RTROIInterpretedType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A6)",
    "Name": "ROI Interpreter",
    "Keyword": "ROIInterpreter",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B0)",
    "Name": "ROI Physical Properties Sequence",
    "Keyword": "ROIPhysicalPropertiesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B2)",
    "Name": "ROI Physical Property",
    "Keyword": "ROIPhysicalProperty",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B4)",
    "Name": "ROI Physical Property Value",
    "Keyword": "ROIPhysicalPropertyValue",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B6)",
    "Name": "ROI Elemental Composition Sequence",
    "Keyword": "ROIElementalCompositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B7)",
    "Name": "ROI Elemental Composition Atomic Number",
    "Keyword": "ROIElementalCompositionAtomicNumber",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B8)",
    "Name": "ROI Elemental Composition Atomic Mass Fraction",
    "Keyword": "ROIElementalCompositionAtomicMassFraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00C0)",
    "Name": "Frame of Reference Relationship Sequence",
    "Keyword": "FrameOfReferenceRelationshipSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C2)",
    "Name": "Related Frame of Reference UID",
    "Keyword": "RelatedFrameOfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C4)",
    "Name": "Frame of Reference Transformation Type",
    "Keyword": "FrameOfReferenceTransformationType",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C6)",
    "Name": "Frame of Reference Transformation Matrix",
    "Keyword": "FrameOfReferenceTransformationMatrix",
    "VR": "DS",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(3006,00C8)",
    "Name": "Frame of Reference Transformation Comment",
    "Keyword": "FrameOfReferenceTransformationComment",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0010)",
    "Name": "Measured Dose Reference Sequence",
    "Keyword": "MeasuredDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0012)",
    "Name": "Measured Dose Description",
    "Keyword": "MeasuredDoseDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0014)",
    "Name": "Measured Dose Type",
    "Keyword": "MeasuredDoseType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0016)",
    "Name": "Measured Dose Value",
    "Keyword": "MeasuredDoseValue",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0020)",
    "Name": "Treatment Session Beam Sequence",
    "Keyword": "TreatmentSessionBeamSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0021)",
    "Name": "Treatment Session Ion Beam Sequence",
    "Keyword": "TreatmentSessionIonBeamSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0022)",
    "Name": "Current Fraction Number",
    "Keyword": "CurrentFractionNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0024)",
    "Name": "Treatment Control Point Date",
    "Keyword": "TreatmentControlPointDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0025)",
    "Name": "Treatment Control Point Time",
    "Keyword": "TreatmentControlPointTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002A)",
    "Name": "Treatment Termination Status",
    "Keyword": "TreatmentTerminationStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002B)",
    "Name": "Treatment Termination Code",
    "Keyword": "TreatmentTerminationCode",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002C)",
    "Name": "Treatment Verification Status",
    "Keyword": "TreatmentVerificationStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0030)",
    "Name": "Referenced Treatment Record Sequence",
    "Keyword": "ReferencedTreatmentRecordSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0032)",
    "Name": "Specified Primary Meterset",
    "Keyword": "SpecifiedPrimaryMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0033)",
    "Name": "Specified Secondary Meterset",
    "Keyword": "SpecifiedSecondaryMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0036)",
    "Name": "Delivered Primary Meterset",
    "Keyword": "DeliveredPrimaryMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0037)",
    "Name": "Delivered Secondary Meterset",
    "Keyword": "DeliveredSecondaryMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,003A)",
    "Name": "Specified Treatment Time",
    "Keyword": "SpecifiedTreatmentTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,003B)",
    "Name": "Delivered Treatment Time",
    "Keyword": "DeliveredTreatmentTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0040)",
    "Name": "Control Point Delivery Sequence",
    "Keyword": "ControlPointDeliverySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0041)",
    "Name": "Ion Control Point Delivery Sequence",
    "Keyword": "IonControlPointDeliverySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0042)",
    "Name": "Specified Meterset",
    "Keyword": "SpecifiedMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0044)",
    "Name": "Delivered Meterset",
    "Keyword": "DeliveredMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0045)",
    "Name": "Meterset Rate Set",
    "Keyword": "MetersetRateSet",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0046)",
    "Name": "Meterset Rate Delivered",
    "Keyword": "MetersetRateDelivered",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0047)",
    "Name": "Scan Spot Metersets Delivered",
    "Keyword": "ScanSpotMetersetsDelivered",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(3008,0048)",
    "Name": "Dose Rate Delivered",
    "Keyword": "DoseRateDelivered",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0050)",
    "Name": "Treatment Summary Calculated Dose Reference Sequence",
    "Keyword": "TreatmentSummaryCalculatedDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0052)",
    "Name": "Cumulative Dose to Dose Reference",
    "Keyword": "CumulativeDoseToDoseReference",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0054)",
    "Name": "First Treatment Date",
    "Keyword": "FirstTreatmentDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0056)",
    "Name": "Most Recent Treatment Date",
    "Keyword": "MostRecentTreatmentDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,005A)",
    "Name": "Number of Fractions Delivered",
    "Keyword": "NumberOfFractionsDelivered",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0060)",
    "Name": "Override Sequence",
    "Keyword": "OverrideSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0061)",
    "Name": "Parameter Sequence Pointer",
    "Keyword": "ParameterSequencePointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0062)",
    "Name": "Override Parameter Pointer",
    "Keyword": "OverrideParameterPointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0063)",
    "Name": "Parameter Item Index",
    "Keyword": "ParameterItemIndex",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0064)",
    "Name": "Measured Dose Reference Number",
    "Keyword": "MeasuredDoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0065)",
    "Name": "Parameter Pointer",
    "Keyword": "ParameterPointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0066)",
    "Name": "Override Reason",
    "Keyword": "OverrideReason",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0068)",
    "Name": "Corrected Parameter Sequence",
    "Keyword": "CorrectedParameterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,006A)",
    "Name": "Correction Value",
    "Keyword": "CorrectionValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0070)",
    "Name": "Calculated Dose Reference Sequence",
    "Keyword": "CalculatedDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0072)",
    "Name": "Calculated Dose Reference Number",
    "Keyword": "CalculatedDoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0074)",
    "Name": "Calculated Dose Reference Description",
    "Keyword": "CalculatedDoseReferenceDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0076)",
    "Name": "Calculated Dose Reference Dose Value",
    "Keyword": "CalculatedDoseReferenceDoseValue",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0078)",
    "Name": "Start Meterset",
    "Keyword": "StartMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,007A)",
    "Name": "End Meterset",
    "Keyword": "EndMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0080)",
    "Name": "Referenced Measured Dose Reference Sequence",
    "Keyword": "ReferencedMeasuredDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0082)",
    "Name": "Referenced Measured Dose Reference Number",
    "Keyword": "ReferencedMeasuredDoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0090)",
    "Name": "Referenced Calculated Dose Reference Sequence",
    "Keyword": "ReferencedCalculatedDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0092)",
    "Name": "Referenced Calculated Dose Reference Number",
    "Keyword": "ReferencedCalculatedDoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00A0)",
    "Name": "Beam Limiting Device Leaf Pairs Sequence",
    "Keyword": "BeamLimitingDeviceLeafPairsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00B0)",
    "Name": "Recorded Wedge Sequence",
    "Keyword": "RecordedWedgeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00C0)",
    "Name": "Recorded Compensator Sequence",
    "Keyword": "RecordedCompensatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00D0)",
    "Name": "Recorded Block Sequence",
    "Keyword": "RecordedBlockSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00E0)",
    "Name": "Treatment Summary Measured Dose Reference Sequence",
    "Keyword": "TreatmentSummaryMeasuredDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F0)",
    "Name": "Recorded Snout Sequence",
    "Keyword": "RecordedSnoutSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F2)",
    "Name": "Recorded Range Shifter Sequence",
    "Keyword": "RecordedRangeShifterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F4)",
    "Name": "Recorded Lateral Spreading Device Sequence",
    "Keyword": "RecordedLateralSpreadingDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F6)",
    "Name": "Recorded Range Modulator Sequence",
    "Keyword": "RecordedRangeModulatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0100)",
    "Name": "Recorded Source Sequence",
    "Keyword": "RecordedSourceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0105)",
    "Name": "Source Serial Number",
    "Keyword": "SourceSerialNumber",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0110)",
    "Name": "Treatment Session Application Setup Sequence",
    "Keyword": "TreatmentSessionApplicationSetupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0116)",
    "Name": "Application Setup Check",
    "Keyword": "ApplicationSetupCheck",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0120)",
    "Name": "Recorded Brachy Accessory Device Sequence",
    "Keyword": "RecordedBrachyAccessoryDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0122)",
    "Name": "Referenced Brachy Accessory Device Number",
    "Keyword": "ReferencedBrachyAccessoryDeviceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0130)",
    "Name": "Recorded Channel Sequence",
    "Keyword": "RecordedChannelSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0132)",
    "Name": "Specified Channel Total Time",
    "Keyword": "SpecifiedChannelTotalTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0134)",
    "Name": "Delivered Channel Total Time",
    "Keyword": "DeliveredChannelTotalTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0136)",
    "Name": "Specified Number of Pulses",
    "Keyword": "SpecifiedNumberOfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0138)",
    "Name": "Delivered Number of Pulses",
    "Keyword": "DeliveredNumberOfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,013A)",
    "Name": "Specified Pulse Repetition Interval",
    "Keyword": "SpecifiedPulseRepetitionInterval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,013C)",
    "Name": "Delivered Pulse Repetition Interval",
    "Keyword": "DeliveredPulseRepetitionInterval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0140)",
    "Name": "Recorded Source Applicator Sequence",
    "Keyword": "RecordedSourceApplicatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0142)",
    "Name": "Referenced Source Applicator Number",
    "Keyword": "ReferencedSourceApplicatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0150)",
    "Name": "Recorded Channel Shield Sequence",
    "Keyword": "RecordedChannelShieldSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0152)",
    "Name": "Referenced Channel Shield Number",
    "Keyword": "ReferencedChannelShieldNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0160)",
    "Name": "Brachy Control Point Delivered Sequence",
    "Keyword": "BrachyControlPointDeliveredSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0162)",
    "Name": "Safe Position Exit Date",
    "Keyword": "SafePositionExitDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0164)",
    "Name": "Safe Position Exit Time",
    "Keyword": "SafePositionExitTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0166)",
    "Name": "Safe Position Return Date",
    "Keyword": "SafePositionReturnDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0168)",
    "Name": "Safe Position Return Time",
    "Keyword": "SafePositionReturnTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0200)",
    "Name": "Current Treatment Status",
    "Keyword": "CurrentTreatmentStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0202)",
    "Name": "Treatment Status Comment",
    "Keyword": "TreatmentStatusComment",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0220)",
    "Name": "Fraction Group Summary Sequence",
    "Keyword": "FractionGroupSummarySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0223)",
    "Name": "Referenced Fraction Number",
    "Keyword": "ReferencedFractionNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0224)",
    "Name": "Fraction Group Type",
    "Keyword": "FractionGroupType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0230)",
    "Name": "Beam Stopper Position",
    "Keyword": "BeamStopperPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0240)",
    "Name": "Fraction Status Summary Sequence",
    "Keyword": "FractionStatusSummarySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0250)",
    "Name": "Treatment Date",
    "Keyword": "TreatmentDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0251)",
    "Name": "Treatment Time",
    "Keyword": "TreatmentTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0002)",
    "Name": "RT Plan Label",
    "Keyword": "RTPlanLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0003)",
    "Name": "RT Plan Name",
    "Keyword": "RTPlanName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0004)",
    "Name": "RT Plan Description",
    "Keyword": "RTPlanDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0006)",
    "Name": "RT Plan Date",
    "Keyword": "RTPlanDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0007)",
    "Name": "RT Plan Time",
    "Keyword": "RTPlanTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0009)",
    "Name": "Treatment Protocols",
    "Keyword": "TreatmentProtocols",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,000A)",
    "Name": "Plan Intent",
    "Keyword": "PlanIntent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,000B)",
    "Name": "Treatment Sites",
    "Keyword": "TreatmentSites",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,000C)",
    "Name": "RT Plan Geometry",
    "Keyword": "RTPlanGeometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,000E)",
    "Name": "Prescription Description",
    "Keyword": "PrescriptionDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0010)",
    "Name": "Dose Reference Sequence",
    "Keyword": "DoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0012)",
    "Name": "Dose Reference Number",
    "Keyword": "DoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0013)",
    "Name": "Dose Reference UID",
    "Keyword": "DoseReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0014)",
    "Name": "Dose Reference Structure Type",
    "Keyword": "DoseReferenceStructureType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0015)",
    "Name": "Nominal Beam Energy Unit",
    "Keyword": "NominalBeamEnergyUnit",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0016)",
    "Name": "Dose Reference Description",
    "Keyword": "DoseReferenceDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0018)",
    "Name": "Dose Reference Point Coordinates",
    "Keyword": "DoseReferencePointCoordinates",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,001A)",
    "Name": "Nominal Prior Dose",
    "Keyword": "NominalPriorDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0020)",
    "Name": "Dose Reference Type",
    "Keyword": "DoseReferenceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0021)",
    "Name": "Constraint Weight",
    "Keyword": "ConstraintWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0022)",
    "Name": "Delivery Warning Dose",
    "Keyword": "DeliveryWarningDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0023)",
    "Name": "Delivery Maximum Dose",
    "Keyword": "DeliveryMaximumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0025)",
    "Name": "Target Minimum Dose",
    "Keyword": "TargetMinimumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0026)",
    "Name": "Target Prescription Dose",
    "Keyword": "TargetPrescriptionDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0027)",
    "Name": "Target Maximum Dose",
    "Keyword": "TargetMaximumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0028)",
    "Name": "Target Underdose Volume Fraction",
    "Keyword": "TargetUnderdoseVolumeFraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002A)",
    "Name": "Organ at Risk Full-volume Dose",
    "Keyword": "OrganAtRiskFullVolumeDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002B)",
    "Name": "Organ at Risk Limit Dose",
    "Keyword": "OrganAtRiskLimitDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002C)",
    "Name": "Organ at Risk Maximum Dose",
    "Keyword": "OrganAtRiskMaximumDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002D)",
    "Name": "Organ at Risk Overdose Volume Fraction",
    "Keyword": "OrganAtRiskOverdoseVolumeFraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0040)",
    "Name": "Tolerance Table Sequence",
    "Keyword": "ToleranceTableSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0042)",
    "Name": "Tolerance Table Number",
    "Keyword": "ToleranceTableNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0043)",
    "Name": "Tolerance Table Label",
    "Keyword": "ToleranceTableLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0044)",
    "Name": "Gantry Angle Tolerance",
    "Keyword": "GantryAngleTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0046)",
    "Name": "Beam Limiting Device Angle Tolerance",
    "Keyword": "BeamLimitingDeviceAngleTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0048)",
    "Name": "Beam Limiting Device Tolerance Sequence",
    "Keyword": "BeamLimitingDeviceToleranceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004A)",
    "Name": "Beam Limiting Device Position Tolerance",
    "Keyword": "BeamLimitingDevicePositionTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004B)",
    "Name": "Snout Position Tolerance",
    "Keyword": "SnoutPositionTolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004C)",
    "Name": "Patient Support Angle Tolerance",
    "Keyword": "PatientSupportAngleTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004E)",
    "Name": "Table Top Eccentric Angle Tolerance",
    "Keyword": "TableTopEccentricAngleTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004F)",
    "Name": "Table Top Pitch Angle Tolerance",
    "Keyword": "TableTopPitchAngleTolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0050)",
    "Name": "Table Top Roll Angle Tolerance",
    "Keyword": "TableTopRollAngleTolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0051)",
    "Name": "Table Top Vertical Position Tolerance",
    "Keyword": "TableTopVerticalPositionTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0052)",
    "Name": "Table Top Longitudinal Position Tolerance",
    "Keyword": "TableTopLongitudinalPositionTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0053)",
    "Name": "Table Top Lateral Position Tolerance",
    "Keyword": "TableTopLateralPositionTolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0055)",
    "Name": "RT Plan Relationship",
    "Keyword": "RTPlanRelationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0070)",
    "Name": "Fraction Group Sequence",
    "Keyword": "FractionGroupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0071)",
    "Name": "Fraction Group Number",
    "Keyword": "FractionGroupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0072)",
    "Name": "Fraction Group Description",
    "Keyword": "FractionGroupDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0078)",
    "Name": "Number of Fractions Planned",
    "Keyword": "NumberOfFractionsPlanned",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0079)",
    "Name": "Number of Fraction Pattern Digits Per Day",
    "Keyword": "NumberOfFractionPatternDigitsPerDay",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,007A)",
    "Name": "Repeat Fraction Cycle Length",
    "Keyword": "RepeatFractionCycleLength",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,007B)",
    "Name": "Fraction Pattern",
    "Keyword": "FractionPattern",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0080)",
    "Name": "Number of Beams",
    "Keyword": "NumberOfBeams",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0082)",
    "Name": "Beam Dose Specification Point",
    "Keyword": "BeamDoseSpecificationPoint",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0084)",
    "Name": "Beam Dose",
    "Keyword": "BeamDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0086)",
    "Name": "Beam Meterset",
    "Keyword": "BeamMeterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0088)",
    "Name": "Beam Dose Point Depth",
    "Keyword": "BeamDosePointDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,0089)",
    "Name": "Beam Dose Point Equivalent Depth",
    "Keyword": "BeamDosePointEquivalentDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,008A)",
    "Name": "Beam Dose Point SSD",
    "Keyword": "BeamDosePointSSD",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,008B)",
    "Name": "Beam Dose Meaning",
    "Keyword": "BeamDoseMeaning",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008C)",
    "Name": "Beam Dose Verification Control Point Sequence",
    "Keyword": "BeamDoseVerificationControlPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008D)",
    "Name": "Average Beam Dose Point Depth",
    "Keyword": "AverageBeamDosePointDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008E)",
    "Name": "Average Beam Dose Point Equivalent Depth",
    "Keyword": "AverageBeamDosePointEquivalentDepth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008F)",
    "Name": "Average Beam Dose Point SSD",
    "Keyword": "AverageBeamDosePointSSD",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A0)",
    "Name": "Number of Brachy Application Setups",
    "Keyword": "NumberOfBrachyApplicationSetups",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A2)",
    "Name": "Brachy Application Setup Dose Specification Point",
    "Keyword": "BrachyApplicationSetupDoseSpecificationPoint",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A4)",
    "Name": "Brachy Application Setup Dose",
    "Keyword": "BrachyApplicationSetupDose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B0)",
    "Name": "Beam Sequence",
    "Keyword": "BeamSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B2)",
    "Name": "Treatment Machine Name",
    "Keyword": "TreatmentMachineName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B3)",
    "Name": "Primary Dosimeter Unit",
    "Keyword": "PrimaryDosimeterUnit",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B4)",
    "Name": "Source-Axis Distance",
    "Keyword": "SourceAxisDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B6)",
    "Name": "Beam Limiting Device Sequence",
    "Keyword": "BeamLimitingDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B8)",
    "Name": "RT Beam Limiting Device Type",
    "Keyword": "RTBeamLimitingDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BA)",
    "Name": "Source to Beam Limiting Device Distance",
    "Keyword": "SourceToBeamLimitingDeviceDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BB)",
    "Name": "Isocenter to Beam Limiting Device Distance",
    "Keyword": "IsocenterToBeamLimitingDeviceDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BC)",
    "Name": "Number of Leaf/Jaw Pairs",
    "Keyword": "NumberOfLeafJawPairs",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BE)",
    "Name": "Leaf Position Boundaries",
    "Keyword": "LeafPositionBoundaries",
    "VR": "DS",
    "VM": "3-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C0)",
    "Name": "Beam Number",
    "Keyword": "BeamNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C2)",
    "Name": "Beam Name",
    "Keyword": "BeamName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C3)",
    "Name": "Beam Description",
    "Keyword": "BeamDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C4)",
    "Name": "Beam Type",
    "Keyword": "BeamType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C6)",
    "Name": "Radiation Type",
    "Keyword": "RadiationType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C7)",
    "Name": "High-Dose Technique Type",
    "Keyword": "HighDoseTechniqueType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C8)",
    "Name": "Reference Image Number",
    "Keyword": "ReferenceImageNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CA)",
    "Name": "Planned Verification Image Sequence",
    "Keyword": "PlannedVerificationImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CC)",
    "Name": "Imaging Device-Specific Acquisition Parameters",
    "Keyword": "ImagingDeviceSpecificAcquisitionParameters",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CE)",
    "Name": "Treatment Delivery Type",
    "Keyword": "TreatmentDeliveryType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D0)",
    "Name": "Number of Wedges",
    "Keyword": "NumberOfWedges",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D1)",
    "Name": "Wedge Sequence",
    "Keyword": "WedgeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D2)",
    "Name": "Wedge Number",
    "Keyword": "WedgeNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D3)",
    "Name": "Wedge Type",
    "Keyword": "WedgeType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D4)",
    "Name": "Wedge ID",
    "Keyword": "WedgeID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D5)",
    "Name": "Wedge Angle",
    "Keyword": "WedgeAngle",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D6)",
    "Name": "Wedge Factor",
    "Keyword": "WedgeFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D7)",
    "Name": "Total Wedge Tray Water-Equivalent Thickness",
    "Keyword": "TotalWedgeTrayWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D8)",
    "Name": "Wedge Orientation",
    "Keyword": "WedgeOrientation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D9)",
    "Name": "Isocenter to Wedge Tray Distance",
    "Keyword": "IsocenterToWedgeTrayDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DA)",
    "Name": "Source to Wedge Tray Distance",
    "Keyword": "SourceToWedgeTrayDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DB)",
    "Name": "Wedge Thin Edge Position",
    "Keyword": "WedgeThinEdgePosition",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DC)",
    "Name": "Bolus ID",
    "Keyword": "BolusID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DD)",
    "Name": "Bolus Description",
    "Keyword": "BolusDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E0)",
    "Name": "Number of Compensators",
    "Keyword": "NumberOfCompensators",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E1)",
    "Name": "Material ID",
    "Keyword": "MaterialID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E2)",
    "Name": "Total Compensator Tray Factor",
    "Keyword": "TotalCompensatorTrayFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E3)",
    "Name": "Compensator Sequence",
    "Keyword": "CompensatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E4)",
    "Name": "Compensator Number",
    "Keyword": "CompensatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E5)",
    "Name": "Compensator ID",
    "Keyword": "CompensatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E6)",
    "Name": "Source to Compensator Tray Distance",
    "Keyword": "SourceToCompensatorTrayDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E7)",
    "Name": "Compensator Rows",
    "Keyword": "CompensatorRows",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E8)",
    "Name": "Compensator Columns",
    "Keyword": "CompensatorColumns",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E9)",
    "Name": "Compensator Pixel Spacing",
    "Keyword": "CompensatorPixelSpacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EA)",
    "Name": "Compensator Position",
    "Keyword": "CompensatorPosition",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EB)",
    "Name": "Compensator Transmission Data",
    "Keyword": "CompensatorTransmissionData",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EC)",
    "Name": "Compensator Thickness Data",
    "Keyword": "CompensatorThicknessData",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00ED)",
    "Name": "Number of Boli",
    "Keyword": "NumberOfBoli",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EE)",
    "Name": "Compensator Type",
    "Keyword": "CompensatorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EF)",
    "Name": "Compensator Tray ID",
    "Keyword": "CompensatorTrayID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F0)",
    "Name": "Number of Blocks",
    "Keyword": "NumberOfBlocks",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F2)",
    "Name": "Total Block Tray Factor",
    "Keyword": "TotalBlockTrayFactor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F3)",
    "Name": "Total Block Tray Water-Equivalent Thickness",
    "Keyword": "TotalBlockTrayWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F4)",
    "Name": "Block Sequence",
    "Keyword": "BlockSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F5)",
    "Name": "Block Tray ID",
    "Keyword": "BlockTrayID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F6)",
    "Name": "Source to Block Tray Distance",
    "Keyword": "SourceToBlockTrayDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F7)",
    "Name": "Isocenter to Block Tray Distance",
    "Keyword": "IsocenterToBlockTrayDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F8)",
    "Name": "Block Type",
    "Keyword": "BlockType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F9)",
    "Name": "Accessory Code",
    "Keyword": "AccessoryCode",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FA)",
    "Name": "Block Divergence",
    "Keyword": "BlockDivergence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FB)",
    "Name": "Block Mounting Position",
    "Keyword": "BlockMountingPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FC)",
    "Name": "Block Number",
    "Keyword": "BlockNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FE)",
    "Name": "Block Name",
    "Keyword": "BlockName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0100)",
    "Name": "Block Thickness",
    "Keyword": "BlockThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0102)",
    "Name": "Block Transmission",
    "Keyword": "BlockTransmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0104)",
    "Name": "Block Number of Points",
    "Keyword": "BlockNumberOfPoints",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0106)",
    "Name": "Block Data",
    "Keyword": "BlockData",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0107)",
    "Name": "Applicator Sequence",
    "Keyword": "ApplicatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0108)",
    "Name": "Applicator ID",
    "Keyword": "ApplicatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0109)",
    "Name": "Applicator Type",
    "Keyword": "ApplicatorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010A)",
    "Name": "Applicator Description",
    "Keyword": "ApplicatorDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010C)",
    "Name": "Cumulative Dose Reference Coefficient",
    "Keyword": "CumulativeDoseReferenceCoefficient",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010E)",
    "Name": "Final Cumulative Meterset Weight",
    "Keyword": "FinalCumulativeMetersetWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0110)",
    "Name": "Number of Control Points",
    "Keyword": "NumberOfControlPoints",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0111)",
    "Name": "Control Point Sequence",
    "Keyword": "ControlPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0112)",
    "Name": "Control Point Index",
    "Keyword": "ControlPointIndex",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0114)",
    "Name": "Nominal Beam Energy",
    "Keyword": "NominalBeamEnergy",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0115)",
    "Name": "Dose Rate Set",
    "Keyword": "DoseRateSet",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0116)",
    "Name": "Wedge Position Sequence",
    "Keyword": "WedgePositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0118)",
    "Name": "Wedge Position",
    "Keyword": "WedgePosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011A)",
    "Name": "Beam Limiting Device Position Sequence",
    "Keyword": "BeamLimitingDevicePositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011C)",
    "Name": "Leaf/Jaw Positions",
    "Keyword": "LeafJawPositions",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(300A,011E)",
    "Name": "Gantry Angle",
    "Keyword": "GantryAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011F)",
    "Name": "Gantry Rotation Direction",
    "Keyword": "GantryRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0120)",
    "Name": "Beam Limiting Device Angle",
    "Keyword": "BeamLimitingDeviceAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0121)",
    "Name": "Beam Limiting Device Rotation Direction",
    "Keyword": "BeamLimitingDeviceRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0122)",
    "Name": "Patient Support Angle",
    "Keyword": "PatientSupportAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0123)",
    "Name": "Patient Support Rotation Direction",
    "Keyword": "PatientSupportRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0124)",
    "Name": "Table Top Eccentric Axis Distance",
    "Keyword": "TableTopEccentricAxisDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0125)",
    "Name": "Table Top Eccentric Angle",
    "Keyword": "TableTopEccentricAngle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0126)",
    "Name": "Table Top Eccentric Rotation Direction",
    "Keyword": "TableTopEccentricRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0128)",
    "Name": "Table Top Vertical Position",
    "Keyword": "TableTopVerticalPosition",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0129)",
    "Name": "Table Top Longitudinal Position",
    "Keyword": "TableTopLongitudinalPosition",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,012A)",
    "Name": "Table Top Lateral Position",
    "Keyword": "TableTopLateralPosition",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,012C)",
    "Name": "Isocenter Position",
    "Keyword": "IsocenterPosition",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,012E)",
    "Name": "Surface Entry Point",
    "Keyword": "SurfaceEntryPoint",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0130)",
    "Name": "Source to Surface Distance",
    "Keyword": "SourceToSurfaceDistance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0134)",
    "Name": "Cumulative Meterset Weight",
    "Keyword": "CumulativeMetersetWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0140)",
    "Name": "Table Top Pitch Angle",
    "Keyword": "TableTopPitchAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0142)",
    "Name": "Table Top Pitch Rotation Direction",
    "Keyword": "TableTopPitchRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0144)",
    "Name": "Table Top Roll Angle",
    "Keyword": "TableTopRollAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0146)",
    "Name": "Table Top Roll Rotation Direction",
    "Keyword": "TableTopRollRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0148)",
    "Name": "Head Fixation Angle",
    "Keyword": "HeadFixationAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014A)",
    "Name": "Gantry Pitch Angle",
    "Keyword": "GantryPitchAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014C)",
    "Name": "Gantry Pitch Rotation Direction",
    "Keyword": "GantryPitchRotationDirection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014E)",
    "Name": "Gantry Pitch Angle Tolerance",
    "Keyword": "GantryPitchAngleTolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0180)",
    "Name": "Patient Setup Sequence",
    "Keyword": "PatientSetupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0182)",
    "Name": "Patient Setup Number",
    "Keyword": "PatientSetupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0183)",
    "Name": "Patient Setup Label",
    "Keyword": "PatientSetupLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0184)",
    "Name": "Patient Additional Position",
    "Keyword": "PatientAdditionalPosition",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0190)",
    "Name": "Fixation Device Sequence",
    "Keyword": "FixationDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0192)",
    "Name": "Fixation Device Type",
    "Keyword": "FixationDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0194)",
    "Name": "Fixation Device Label",
    "Keyword": "FixationDeviceLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0196)",
    "Name": "Fixation Device Description",
    "Keyword": "FixationDeviceDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0198)",
    "Name": "Fixation Device Position",
    "Keyword": "FixationDevicePosition",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0199)",
    "Name": "Fixation Device Pitch Angle",
    "Keyword": "FixationDevicePitchAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,019A)",
    "Name": "Fixation Device Roll Angle",
    "Keyword": "FixationDeviceRollAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A0)",
    "Name": "Shielding Device Sequence",
    "Keyword": "ShieldingDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A2)",
    "Name": "Shielding Device Type",
    "Keyword": "ShieldingDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A4)",
    "Name": "Shielding Device Label",
    "Keyword": "ShieldingDeviceLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A6)",
    "Name": "Shielding Device Description",
    "Keyword": "ShieldingDeviceDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A8)",
    "Name": "Shielding Device Position",
    "Keyword": "ShieldingDevicePosition",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B0)",
    "Name": "Setup Technique",
    "Keyword": "SetupTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B2)",
    "Name": "Setup Technique Description",
    "Keyword": "SetupTechniqueDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B4)",
    "Name": "Setup Device Sequence",
    "Keyword": "SetupDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B6)",
    "Name": "Setup Device Type",
    "Keyword": "SetupDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B8)",
    "Name": "Setup Device Label",
    "Keyword": "SetupDeviceLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01BA)",
    "Name": "Setup Device Description",
    "Keyword": "SetupDeviceDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01BC)",
    "Name": "Setup Device Parameter",
    "Keyword": "SetupDeviceParameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D0)",
    "Name": "Setup Reference Description",
    "Keyword": "SetupReferenceDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D2)",
    "Name": "Table Top Vertical Setup Displacement",
    "Keyword": "TableTopVerticalSetupDisplacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D4)",
    "Name": "Table Top Longitudinal Setup Displacement",
    "Keyword": "TableTopLongitudinalSetupDisplacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D6)",
    "Name": "Table Top Lateral Setup Displacement",
    "Keyword": "TableTopLateralSetupDisplacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0200)",
    "Name": "Brachy Treatment Technique",
    "Keyword": "BrachyTreatmentTechnique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0202)",
    "Name": "Brachy Treatment Type",
    "Keyword": "BrachyTreatmentType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0206)",
    "Name": "Treatment Machine Sequence",
    "Keyword": "TreatmentMachineSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0210)",
    "Name": "Source Sequence",
    "Keyword": "SourceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0212)",
    "Name": "Source Number",
    "Keyword": "SourceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0214)",
    "Name": "Source Type",
    "Keyword": "SourceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0216)",
    "Name": "Source Manufacturer",
    "Keyword": "SourceManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0218)",
    "Name": "Active Source Diameter",
    "Keyword": "ActiveSourceDiameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021A)",
    "Name": "Active Source Length",
    "Keyword": "ActiveSourceLength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021B)",
    "Name": "Source Model ID",
    "Keyword": "SourceModelID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021C)",
    "Name": "Source Description",
    "Keyword": "SourceDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0222)",
    "Name": "Source Encapsulation Nominal Thickness",
    "Keyword": "SourceEncapsulationNominalThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0224)",
    "Name": "Source Encapsulation Nominal Transmission",
    "Keyword": "SourceEncapsulationNominalTransmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0226)",
    "Name": "Source Isotope Name",
    "Keyword": "SourceIsotopeName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0228)",
    "Name": "Source Isotope Half Life",
    "Keyword": "SourceIsotopeHalfLife",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0229)",
    "Name": "Source Strength Units",
    "Keyword": "SourceStrengthUnits",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022A)",
    "Name": "Reference Air Kerma Rate",
    "Keyword": "ReferenceAirKermaRate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022B)",
    "Name": "Source Strength",
    "Keyword": "SourceStrength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022C)",
    "Name": "Source Strength Reference Date",
    "Keyword": "SourceStrengthReferenceDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022E)",
    "Name": "Source Strength Reference Time",
    "Keyword": "SourceStrengthReferenceTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0230)",
    "Name": "Application Setup Sequence",
    "Keyword": "ApplicationSetupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0232)",
    "Name": "Application Setup Type",
    "Keyword": "ApplicationSetupType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0234)",
    "Name": "Application Setup Number",
    "Keyword": "ApplicationSetupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0236)",
    "Name": "Application Setup Name",
    "Keyword": "ApplicationSetupName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0238)",
    "Name": "Application Setup Manufacturer",
    "Keyword": "ApplicationSetupManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0240)",
    "Name": "Template Number",
    "Keyword": "TemplateNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0242)",
    "Name": "Template Type",
    "Keyword": "TemplateType",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0244)",
    "Name": "Template Name",
    "Keyword": "TemplateName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0250)",
    "Name": "Total Reference Air Kerma",
    "Keyword": "TotalReferenceAirKerma",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0260)",
    "Name": "Brachy Accessory Device Sequence",
    "Keyword": "BrachyAccessoryDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0262)",
    "Name": "Brachy Accessory Device Number",
    "Keyword": "BrachyAccessoryDeviceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0263)",
    "Name": "Brachy Accessory Device ID",
    "Keyword": "BrachyAccessoryDeviceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0264)",
    "Name": "Brachy Accessory Device Type",
    "Keyword": "BrachyAccessoryDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0266)",
    "Name": "Brachy Accessory Device Name",
    "Keyword": "BrachyAccessoryDeviceName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,026A)",
    "Name": "Brachy Accessory Device Nominal Thickness",
    "Keyword": "BrachyAccessoryDeviceNominalThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,026C)",
    "Name": "Brachy Accessory Device Nominal Transmission",
    "Keyword": "BrachyAccessoryDeviceNominalTransmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0280)",
    "Name": "Channel Sequence",
    "Keyword": "ChannelSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0282)",
    "Name": "Channel Number",
    "Keyword": "ChannelNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0284)",
    "Name": "Channel Length",
    "Keyword": "ChannelLength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0286)",
    "Name": "Channel Total Time",
    "Keyword": "ChannelTotalTime",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0288)",
    "Name": "Source Movement Type",
    "Keyword": "SourceMovementType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,028A)",
    "Name": "Number of Pulses",
    "Keyword": "NumberOfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,028C)",
    "Name": "Pulse Repetition Interval",
    "Keyword": "PulseRepetitionInterval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0290)",
    "Name": "Source Applicator Number",
    "Keyword": "SourceApplicatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0291)",
    "Name": "Source Applicator ID",
    "Keyword": "SourceApplicatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0292)",
    "Name": "Source Applicator Type",
    "Keyword": "SourceApplicatorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0294)",
    "Name": "Source Applicator Name",
    "Keyword": "SourceApplicatorName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0296)",
    "Name": "Source Applicator Length",
    "Keyword": "SourceApplicatorLength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0298)",
    "Name": "Source Applicator Manufacturer",
    "Keyword": "SourceApplicatorManufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,029C)",
    "Name": "Source Applicator Wall Nominal Thickness",
    "Keyword": "SourceApplicatorWallNominalThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,029E)",
    "Name": "Source Applicator Wall Nominal Transmission",
    "Keyword": "SourceApplicatorWallNominalTransmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A0)",
    "Name": "Source Applicator Step Size",
    "Keyword": "SourceApplicatorStepSize",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A2)",
    "Name": "Transfer Tube Number",
    "Keyword": "TransferTubeNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A4)",
    "Name": "Transfer Tube Length",
    "Keyword": "TransferTubeLength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B0)",
    "Name": "Channel Shield Sequence",
    "Keyword": "ChannelShieldSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B2)",
    "Name": "Channel Shield Number",
    "Keyword": "ChannelShieldNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B3)",
    "Name": "Channel Shield ID",
    "Keyword": "ChannelShieldID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B4)",
    "Name": "Channel Shield Name",
    "Keyword": "ChannelShieldName",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B8)",
    "Name": "Channel Shield Nominal Thickness",
    "Keyword": "ChannelShieldNominalThickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02BA)",
    "Name": "Channel Shield Nominal Transmission",
    "Keyword": "ChannelShieldNominalTransmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02C8)",
    "Name": "Final Cumulative Time Weight",
    "Keyword": "FinalCumulativeTimeWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D0)",
    "Name": "Brachy Control Point Sequence",
    "Keyword": "BrachyControlPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D2)",
    "Name": "Control Point Relative Position",
    "Keyword": "ControlPointRelativePosition",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D4)",
    "Name": "Control Point 3D Position",
    "Keyword": "ControlPoint3DPosition",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D6)",
    "Name": "Cumulative Time Weight",
    "Keyword": "CumulativeTimeWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E0)",
    "Name": "Compensator Divergence",
    "Keyword": "CompensatorDivergence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E1)",
    "Name": "Compensator Mounting Position",
    "Keyword": "CompensatorMountingPosition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E2)",
    "Name": "Source to Compensator Distance",
    "Keyword": "SourceToCompensatorDistance",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E3)",
    "Name": "Total Compensator Tray Water-Equivalent Thickness",
    "Keyword": "TotalCompensatorTrayWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E4)",
    "Name": "Isocenter to Compensator Tray Distance",
    "Keyword": "IsocenterToCompensatorTrayDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E5)",
    "Name": "Compensator Column Offset",
    "Keyword": "CompensatorColumnOffset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E6)",
    "Name": "Isocenter to Compensator Distances",
    "Keyword": "IsocenterToCompensatorDistances",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E7)",
    "Name": "Compensator Relative Stopping Power Ratio",
    "Keyword": "CompensatorRelativeStoppingPowerRatio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E8)",
    "Name": "Compensator Milling Tool Diameter",
    "Keyword": "CompensatorMillingToolDiameter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02EA)",
    "Name": "Ion Range Compensator Sequence",
    "Keyword": "IonRangeCompensatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02EB)",
    "Name": "Compensator Description",
    "Keyword": "CompensatorDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0302)",
    "Name": "Radiation Mass Number",
    "Keyword": "RadiationMassNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0304)",
    "Name": "Radiation Atomic Number",
    "Keyword": "RadiationAtomicNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0306)",
    "Name": "Radiation Charge State",
    "Keyword": "RadiationChargeState",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0308)",
    "Name": "Scan Mode",
    "Keyword": "ScanMode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030A)",
    "Name": "Virtual Source-Axis Distances",
    "Keyword": "VirtualSourceAxisDistances",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,030C)",
    "Name": "Snout Sequence",
    "Keyword": "SnoutSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030D)",
    "Name": "Snout Position",
    "Keyword": "SnoutPosition",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030F)",
    "Name": "Snout ID",
    "Keyword": "SnoutID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0312)",
    "Name": "Number of Range Shifters",
    "Keyword": "NumberOfRangeShifters",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0314)",
    "Name": "Range Shifter Sequence",
    "Keyword": "RangeShifterSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0316)",
    "Name": "Range Shifter Number",
    "Keyword": "RangeShifterNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0318)",
    "Name": "Range Shifter ID",
    "Keyword": "RangeShifterID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0320)",
    "Name": "Range Shifter Type",
    "Keyword": "RangeShifterType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0322)",
    "Name": "Range Shifter Description",
    "Keyword": "RangeShifterDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0330)",
    "Name": "Number of Lateral Spreading Devices",
    "Keyword": "NumberOfLateralSpreadingDevices",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0332)",
    "Name": "Lateral Spreading Device Sequence",
    "Keyword": "LateralSpreadingDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0334)",
    "Name": "Lateral Spreading Device Number",
    "Keyword": "LateralSpreadingDeviceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0336)",
    "Name": "Lateral Spreading Device ID",
    "Keyword": "LateralSpreadingDeviceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0338)",
    "Name": "Lateral Spreading Device Type",
    "Keyword": "LateralSpreadingDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,033A)",
    "Name": "Lateral Spreading Device Description",
    "Keyword": "LateralSpreadingDeviceDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,033C)",
    "Name": "Lateral Spreading Device Water Equivalent Thickness",
    "Keyword": "LateralSpreadingDeviceWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0340)",
    "Name": "Number of Range Modulators",
    "Keyword": "NumberOfRangeModulators",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0342)",
    "Name": "Range Modulator Sequence",
    "Keyword": "RangeModulatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0344)",
    "Name": "Range Modulator Number",
    "Keyword": "RangeModulatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0346)",
    "Name": "Range Modulator ID",
    "Keyword": "RangeModulatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0348)",
    "Name": "Range Modulator Type",
    "Keyword": "RangeModulatorType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,034A)",
    "Name": "Range Modulator Description",
    "Keyword": "RangeModulatorDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,034C)",
    "Name": "Beam Current Modulation ID",
    "Keyword": "BeamCurrentModulationID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0350)",
    "Name": "Patient Support Type",
    "Keyword": "PatientSupportType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0352)",
    "Name": "Patient Support ID",
    "Keyword": "PatientSupportID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0354)",
    "Name": "Patient Support Accessory Code",
    "Keyword": "PatientSupportAccessoryCode",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0356)",
    "Name": "Fixation Light Azimuthal Angle",
    "Keyword": "FixationLightAzimuthalAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0358)",
    "Name": "Fixation Light Polar Angle",
    "Keyword": "FixationLightPolarAngle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,035A)",
    "Name": "Meterset Rate",
    "Keyword": "MetersetRate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0360)",
    "Name": "Range Shifter Settings Sequence",
    "Keyword": "RangeShifterSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0362)",
    "Name": "Range Shifter Setting",
    "Keyword": "RangeShifterSetting",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0364)",
    "Name": "Isocenter to Range Shifter Distance",
    "Keyword": "IsocenterToRangeShifterDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0366)",
    "Name": "Range Shifter Water Equivalent Thickness",
    "Keyword": "RangeShifterWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0370)",
    "Name": "Lateral Spreading Device Settings Sequence",
    "Keyword": "LateralSpreadingDeviceSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0372)",
    "Name": "Lateral Spreading Device Setting",
    "Keyword": "LateralSpreadingDeviceSetting",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0374)",
    "Name": "Isocenter to Lateral Spreading Device Distance",
    "Keyword": "IsocenterToLateralSpreadingDeviceDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0380)",
    "Name": "Range Modulator Settings Sequence",
    "Keyword": "RangeModulatorSettingsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0382)",
    "Name": "Range Modulator Gating Start Value",
    "Keyword": "RangeModulatorGatingStartValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0384)",
    "Name": "Range Modulator Gating Stop Value",
    "Keyword": "RangeModulatorGatingStopValue",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0386)",
    "Name": "Range Modulator Gating Start Water Equivalent Thickness",
    "Keyword": "RangeModulatorGatingStartWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0388)",
    "Name": "Range Modulator Gating Stop Water Equivalent Thickness",
    "Keyword": "RangeModulatorGatingStopWaterEquivalentThickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,038A)",
    "Name": "Isocenter to Range Modulator Distance",
    "Keyword": "IsocenterToRangeModulatorDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0390)",
    "Name": "Scan Spot Tune ID",
    "Keyword": "ScanSpotTuneID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0392)",
    "Name": "Number of Scan Spot Positions",
    "Keyword": "NumberOfScanSpotPositions",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0394)",
    "Name": "Scan Spot Position Map",
    "Keyword": "ScanSpotPositionMap",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0396)",
    "Name": "Scan Spot Meterset Weights",
    "Keyword": "ScanSpotMetersetWeights",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0398)",
    "Name": "Scanning Spot Size",
    "Keyword": "ScanningSpotSize",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,039A)",
    "Name": "Number of Paintings",
    "Keyword": "NumberOfPaintings",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A0)",
    "Name": "Ion Tolerance Table Sequence",
    "Keyword": "IonToleranceTableSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A2)",
    "Name": "Ion Beam Sequence",
    "Keyword": "IonBeamSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A4)",
    "Name": "Ion Beam Limiting Device Sequence",
    "Keyword": "IonBeamLimitingDeviceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A6)",
    "Name": "Ion Block Sequence",
    "Keyword": "IonBlockSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A8)",
    "Name": "Ion Control Point Sequence",
    "Keyword": "IonControlPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03AA)",
    "Name": "Ion Wedge Sequence",
    "Keyword": "IonWedgeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03AC)",
    "Name": "Ion Wedge Position Sequence",
    "Keyword": "IonWedgePositionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0401)",
    "Name": "Referenced Setup Image Sequence",
    "Keyword": "ReferencedSetupImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0402)",
    "Name": "Setup Image Comment",
    "Keyword": "SetupImageComment",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0410)",
    "Name": "Motion Synchronization Sequence",
    "Keyword": "MotionSynchronizationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0412)",
    "Name": "Control Point Orientation",
    "Keyword": "ControlPointOrientation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0420)",
    "Name": "General Accessory Sequence",
    "Keyword": "GeneralAccessorySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0421)",
    "Name": "General Accessory ID",
    "Keyword": "GeneralAccessoryID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0422)",
    "Name": "General Accessory Description",
    "Keyword": "GeneralAccessoryDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0423)",
    "Name": "General Accessory Type",
    "Keyword": "GeneralAccessoryType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0424)",
    "Name": "General Accessory Number",
    "Keyword": "GeneralAccessoryNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0425)",
    "Name": "Source to General Accessory Distance",
    "Keyword": "SourceToGeneralAccessoryDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0431)",
    "Name": "Applicator Geometry Sequence",
    "Keyword": "ApplicatorGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0432)",
    "Name": "Applicator Aperture Shape",
    "Keyword": "ApplicatorApertureShape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0433)",
    "Name": "Applicator Opening",
    "Keyword": "ApplicatorOpening",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0434)",
    "Name": "Applicator Opening X",
    "Keyword": "ApplicatorOpeningX",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0435)",
    "Name": "Applicator Opening Y",
    "Keyword": "ApplicatorOpeningY",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0436)",
    "Name": "Source to Applicator Mounting Position Distance",
    "Keyword": "SourceToApplicatorMountingPositionDistance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0002)",
    "Name": "Referenced RT Plan Sequence",
    "Keyword": "ReferencedRTPlanSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0004)",
    "Name": "Referenced Beam Sequence",
    "Keyword": "ReferencedBeamSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0006)",
    "Name": "Referenced Beam Number",
    "Keyword": "ReferencedBeamNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0007)",
    "Name": "Referenced Reference Image Number",
    "Keyword": "ReferencedReferenceImageNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0008)",
    "Name": "Start Cumulative Meterset Weight",
    "Keyword": "StartCumulativeMetersetWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0009)",
    "Name": "End Cumulative Meterset Weight",
    "Keyword": "EndCumulativeMetersetWeight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000A)",
    "Name": "Referenced Brachy Application Setup Sequence",
    "Keyword": "ReferencedBrachyApplicationSetupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000C)",
    "Name": "Referenced Brachy Application Setup Number",
    "Keyword": "ReferencedBrachyApplicationSetupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000E)",
    "Name": "Referenced Source Number",
    "Keyword": "ReferencedSourceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0020)",
    "Name": "Referenced Fraction Group Sequence",
    "Keyword": "ReferencedFractionGroupSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0022)",
    "Name": "Referenced Fraction Group Number",
    "Keyword": "ReferencedFractionGroupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0040)",
    "Name": "Referenced Verification Image Sequence",
    "Keyword": "ReferencedVerificationImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0042)",
    "Name": "Referenced Reference Image Sequence",
    "Keyword": "ReferencedReferenceImageSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0050)",
    "Name": "Referenced Dose Reference Sequence",
    "Keyword": "ReferencedDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0051)",
    "Name": "Referenced Dose Reference Number",
    "Keyword": "ReferencedDoseReferenceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0055)",
    "Name": "Brachy Referenced Dose Reference Sequence",
    "Keyword": "BrachyReferencedDoseReferenceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0060)",
    "Name": "Referenced Structure Set Sequence",
    "Keyword": "ReferencedStructureSetSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,006A)",
    "Name": "Referenced Patient Setup Number",
    "Keyword": "ReferencedPatientSetupNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0080)",
    "Name": "Referenced Dose Sequence",
    "Keyword": "ReferencedDoseSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00A0)",
    "Name": "Referenced Tolerance Table Number",
    "Keyword": "ReferencedToleranceTableNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00B0)",
    "Name": "Referenced Bolus Sequence",
    "Keyword": "ReferencedBolusSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00C0)",
    "Name": "Referenced Wedge Number",
    "Keyword": "ReferencedWedgeNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00D0)",
    "Name": "Referenced Compensator Number",
    "Keyword": "ReferencedCompensatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00E0)",
    "Name": "Referenced Block Number",
    "Keyword": "ReferencedBlockNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F0)",
    "Name": "Referenced Control Point Index",
    "Keyword": "ReferencedControlPointIndex",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F2)",
    "Name": "Referenced Control Point Sequence",
    "Keyword": "ReferencedControlPointSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F4)",
    "Name": "Referenced Start Control Point Index",
    "Keyword": "ReferencedStartControlPointIndex",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F6)",
    "Name": "Referenced Stop Control Point Index",
    "Keyword": "ReferencedStopControlPointIndex",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0100)",
    "Name": "Referenced Range Shifter Number",
    "Keyword": "ReferencedRangeShifterNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0102)",
    "Name": "Referenced Lateral Spreading Device Number",
    "Keyword": "ReferencedLateralSpreadingDeviceNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0104)",
    "Name": "Referenced Range Modulator Number",
    "Keyword": "ReferencedRangeModulatorNumber",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0002)",
    "Name": "Approval Status",
    "Keyword": "ApprovalStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0004)",
    "Name": "Review Date",
    "Keyword": "ReviewDate",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0005)",
    "Name": "Review Time",
    "Keyword": "ReviewTime",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0008)",
    "Name": "Reviewer Name",
    "Keyword": "ReviewerName",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(4000,0010)",
    "Name": "Arbitrary",
    "Keyword": "Arbitrary",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4000,4000)",
    "Name": "Text Comments",
    "Keyword": "TextComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0040)",
    "Name": "Results ID",
    "Keyword": "ResultsID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0042)",
    "Name": "Results ID Issuer",
    "Keyword": "ResultsIDIssuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0050)",
    "Name": "Referenced Interpretation Sequence",
    "Keyword": "ReferencedInterpretationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,00FF)",
    "Name": "Report Production Status (Trial)",
    "Keyword": "ReportProductionStatusTrial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0100)",
    "Name": "Interpretation Recorded Date",
    "Keyword": "InterpretationRecordedDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0101)",
    "Name": "Interpretation Recorded Time",
    "Keyword": "InterpretationRecordedTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0102)",
    "Name": "Interpretation Recorder",
    "Keyword": "InterpretationRecorder",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0103)",
    "Name": "Reference to Recorded Sound",
    "Keyword": "ReferenceToRecordedSound",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0108)",
    "Name": "Interpretation Transcription Date",
    "Keyword": "InterpretationTranscriptionDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0109)",
    "Name": "Interpretation Transcription Time",
    "Keyword": "InterpretationTranscriptionTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010A)",
    "Name": "Interpretation Transcriber",
    "Keyword": "InterpretationTranscriber",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010B)",
    "Name": "Interpretation Text",
    "Keyword": "InterpretationText",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010C)",
    "Name": "Interpretation Author",
    "Keyword": "InterpretationAuthor",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0111)",
    "Name": "Interpretation Approver Sequence",
    "Keyword": "InterpretationApproverSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0112)",
    "Name": "Interpretation Approval Date",
    "Keyword": "InterpretationApprovalDate",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0113)",
    "Name": "Interpretation Approval Time",
    "Keyword": "InterpretationApprovalTime",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0114)",
    "Name": "Physician Approving Interpretation",
    "Keyword": "PhysicianApprovingInterpretation",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0115)",
    "Name": "Interpretation Diagnosis Description",
    "Keyword": "InterpretationDiagnosisDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0117)",
    "Name": "Interpretation Diagnosis Code Sequence",
    "Keyword": "InterpretationDiagnosisCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0118)",
    "Name": "Results Distribution List Sequence",
    "Keyword": "ResultsDistributionListSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0119)",
    "Name": "Distribution Name",
    "Keyword": "DistributionName",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,011A)",
    "Name": "Distribution Address",
    "Keyword": "DistributionAddress",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0200)",
    "Name": "Interpretation ID",
    "Keyword": "InterpretationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0202)",
    "Name": "Interpretation ID Issuer",
    "Keyword": "InterpretationIDIssuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0210)",
    "Name": "Interpretation Type ID",
    "Keyword": "InterpretationTypeID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0212)",
    "Name": "Interpretation Status ID",
    "Keyword": "InterpretationStatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0300)",
    "Name": "Impressions",
    "Keyword": "Impressions",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,4000)",
    "Name": "Results Comments",
    "Keyword": "ResultsComments",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4010,0001)",
    "Name": "Low Energy Detectors",
    "Keyword": "LowEnergyDetectors",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,0002)",
    "Name": "High Energy Detectors",
    "Keyword": "HighEnergyDetectors",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,0004)",
    "Name": "Detector Geometry Sequence",
    "Keyword": "DetectorGeometrySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1001)",
    "Name": "Threat ROI Voxel Sequence",
    "Keyword": "ThreatROIVoxelSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1004)",
    "Name": "Threat ROI Base",
    "Keyword": "ThreatROIBase",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1005)",
    "Name": "Threat ROI Extents",
    "Keyword": "ThreatROIExtents",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1006)",
    "Name": "Threat ROI Bitmap",
    "Keyword": "ThreatROIBitmap",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1007)",
    "Name": "Route Segment ID",
    "Keyword": "RouteSegmentID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1008)",
    "Name": "Gantry Type",
    "Keyword": "GantryType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1009)",
    "Name": "OOI Owner Type",
    "Keyword": "OOIOwnerType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,100A)",
    "Name": "Route Segment Sequence",
    "Keyword": "RouteSegmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1010)",
    "Name": "Potential Threat Object ID",
    "Keyword": "PotentialThreatObjectID",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1011)",
    "Name": "Threat Sequence",
    "Keyword": "ThreatSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1012)",
    "Name": "Threat Category",
    "Keyword": "ThreatCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1013)",
    "Name": "Threat Category Description",
    "Keyword": "ThreatCategoryDescription",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1014)",
    "Name": "ATD Ability Assessment",
    "Keyword": "ATDAbilityAssessment",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1015)",
    "Name": "ATD Assessment Flag",
    "Keyword": "ATDAssessmentFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1016)",
    "Name": "ATD Assessment Probability",
    "Keyword": "ATDAssessmentProbability",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1017)",
    "Name": "Mass",
    "Keyword": "Mass",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1018)",
    "Name": "Density",
    "Keyword": "Density",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1019)",
    "Name": "Z Effective",
    "Keyword": "ZEffective",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101A)",
    "Name": "Boarding Pass ID",
    "Keyword": "BoardingPassID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101B)",
    "Name": "Center of Mass",
    "Keyword": "CenterOfMass",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101C)",
    "Name": "Center of PTO",
    "Keyword": "CenterOfPTO",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101D)",
    "Name": "Bounding Polygon",
    "Keyword": "BoundingPolygon",
    "VR": "FL",
    "VM": "6-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101E)",
    "Name": "Route Segment Start Location ID",
    "Keyword": "RouteSegmentStartLocationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101F)",
    "Name": "Route Segment End Location ID",
    "Keyword": "RouteSegmentEndLocationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1020)",
    "Name": "Route Segment Location ID Type",
    "Keyword": "RouteSegmentLocationIDType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1021)",
    "Name": "Abort Reason",
    "Keyword": "AbortReason",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1023)",
    "Name": "Volume of PTO",
    "Keyword": "VolumeOfPTO",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1024)",
    "Name": "Abort Flag",
    "Keyword": "AbortFlag",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1025)",
    "Name": "Route Segment Start Time",
    "Keyword": "RouteSegmentStartTime",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1026)",
    "Name": "Route Segment End Time",
    "Keyword": "RouteSegmentEndTime",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1027)",
    "Name": "TDR Type",
    "Keyword": "TDRType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1028)",
    "Name": "International Route Segment",
    "Keyword": "InternationalRouteSegment",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1029)",
    "Name": "Threat Detection Algorithm and Version",
    "Keyword": "ThreatDetectionAlgorithmandVersion",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,102A)",
    "Name": "Assigned Location",
    "Keyword": "AssignedLocation",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,102B)",
    "Name": "Alarm Decision Time",
    "Keyword": "AlarmDecisionTime",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1031)",
    "Name": "Alarm Decision",
    "Keyword": "AlarmDecision",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1033)",
    "Name": "Number of Total Objects",
    "Keyword": "NumberOfTotalObjects",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1034)",
    "Name": "Number of Alarm Objects",
    "Keyword": "NumberOfAlarmObjects",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1037)",
    "Name": "PTO Representation Sequence",
    "Keyword": "PTORepresentationSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1038)",
    "Name": "ATD Assessment Sequence",
    "Keyword": "ATDAssessmentSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1039)",
    "Name": "TIP Type",
    "Keyword": "TIPType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,103A)",
    "Name": "DICOS Version",
    "Keyword": "DICOSVersion",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1041)",
    "Name": "OOI Owner Creation Time",
    "Keyword": "OOIOwnerCreationTime",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1042)",
    "Name": "OOI Type",
    "Keyword": "OOIType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1043)",
    "Name": "OOI Size",
    "Keyword": "OOISize",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1044)",
    "Name": "Acquisition Status",
    "Keyword": "AcquisitionStatus",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1045)",
    "Name": "Basis Materials Code Sequence",
    "Keyword": "BasisMaterialsCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1046)",
    "Name": "Phantom Type",
    "Keyword": "PhantomType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1047)",
    "Name": "OOI Owner Sequence",
    "Keyword": "OOIOwnerSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1048)",
    "Name": "Scan Type",
    "Keyword": "ScanType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1051)",
    "Name": "Itinerary ID",
    "Keyword": "ItineraryID",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1052)",
    "Name": "Itinerary ID Type",
    "Keyword": "ItineraryIDType",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1053)",
    "Name": "Itinerary ID Assigning Authority",
    "Keyword": "ItineraryIDAssigningAuthority",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1054)",
    "Name": "Route ID",
    "Keyword": "RouteID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1055)",
    "Name": "Route ID Assigning Authority",
    "Keyword": "RouteIDAssigningAuthority",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1056)",
    "Name": "Inbound Arrival Type",
    "Keyword": "InboundArrivalType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1058)",
    "Name": "Carrier ID",
    "Keyword": "CarrierID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1059)",
    "Name": "Carrier ID Assigning Authority",
    "Keyword": "CarrierIDAssigningAuthority",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1060)",
    "Name": "Source Orientation",
    "Keyword": "SourceOrientation",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1061)",
    "Name": "Source Position",
    "Keyword": "SourcePosition",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1062)",
    "Name": "Belt Height",
    "Keyword": "BeltHeight",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1064)",
    "Name": "Algorithm Routing Code Sequence",
    "Keyword": "AlgorithmRoutingCodeSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1067)",
    "Name": "Transport Classification",
    "Keyword": "TransportClassification",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1068)",
    "Name": "OOI Type Descriptor",
    "Keyword": "OOITypeDescriptor",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1069)",
    "Name": "Total Processing Time",
    "Keyword": "TotalProcessingTime",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106C)",
    "Name": "Detector Calibration Data",
    "Keyword": "DetectorCalibrationData",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106D)",
    "Name": "Additional Screening Performed",
    "Keyword": "AdditionalScreeningPerformed",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106E)",
    "Name": "Additional Inspection Selection Criteria",
    "Keyword": "AdditionalInspectionSelectionCriteria",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106F)",
    "Name": "Additional Inspection Method Sequence",
    "Keyword": "AdditionalInspectionMethodSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1070)",
    "Name": "AIT Device Type",
    "Keyword": "AITDeviceType",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1071)",
    "Name": "QR Measurements Sequence",
    "Keyword": "QRMeasurementsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1072)",
    "Name": "Target Material Sequence",
    "Keyword": "TargetMaterialSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1073)",
    "Name": "SNR Threshold",
    "Keyword": "SNRThreshold",
    "VR": "FD",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1075)",
    "Name": "Image Scale Representation",
    "Keyword": "ImageScaleRepresentation",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1076)",
    "Name": "Referenced PTO Sequence",
    "Keyword": "ReferencedPTOSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1077)",
    "Name": "Referenced TDR Instance Sequence",
    "Keyword": "ReferencedTDRInstanceSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1078)",
    "Name": "PTO Location Description",
    "Keyword": "PTOLocationDescription",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1079)",
    "Name": "Anomaly Locator Indicator Sequence",
    "Keyword": "AnomalyLocatorIndicatorSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107A)",
    "Name": "Anomaly Locator Indicator",
    "Keyword": "AnomalyLocatorIndicator",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107B)",
    "Name": "PTO Region Sequence",
    "Keyword": "PTORegionSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107C)",
    "Name": "Inspection Selection Criteria",
    "Keyword": "InspectionSelectionCriteria",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107D)",
    "Name": "Secondary Inspection Method Sequence",
    "Keyword": "SecondaryInspectionMethodSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107E)",
    "Name": "PRCS to RCS Orientation",
    "Keyword": "PRCSToRCSOrientation",
    "VR": "DS",
    "VM": "6",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4FFE,0001)",
    "Name": "MAC Parameters Sequence",
    "Keyword": "MACParametersSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(50xx,0005)",
    "Name": "Curve Dimensions",
    "Keyword": "CurveDimensions",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0010)",
    "Name": "Number of Points",
    "Keyword": "NumberOfPoints",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0020)",
    "Name": "Type of Data",
    "Keyword": "TypeOfData",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0022)",
    "Name": "Curve Description",
    "Keyword": "CurveDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0030)",
    "Name": "Axis Units",
    "Keyword": "AxisUnits",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0040)",
    "Name": "Axis Labels",
    "Keyword": "AxisLabels",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0103)",
    "Name": "Data Value Representation",
    "Keyword": "DataValueRepresentation",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0104)",
    "Name": "Minimum Coordinate Value",
    "Keyword": "MinimumCoordinateValue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0105)",
    "Name": "Maximum Coordinate Value",
    "Keyword": "MaximumCoordinateValue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0106)",
    "Name": "Curve Range",
    "Keyword": "CurveRange",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0110)",
    "Name": "Curve Data Descriptor",
    "Keyword": "CurveDataDescriptor",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0112)",
    "Name": "Coordinate Start Value",
    "Keyword": "CoordinateStartValue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0114)",
    "Name": "Coordinate Step Value",
    "Keyword": "CoordinateStepValue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,1001)",
    "Name": "Curve Activation Layer",
    "Keyword": "CurveActivationLayer",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2000)",
    "Name": "Audio Type",
    "Keyword": "AudioType",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2002)",
    "Name": "Audio Sample Format",
    "Keyword": "AudioSampleFormat",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2004)",
    "Name": "Number of Channels",
    "Keyword": "NumberOfChannels",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2006)",
    "Name": "Number of Samples",
    "Keyword": "NumberOfSamples",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2008)",
    "Name": "Sample Rate",
    "Keyword": "SampleRate",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200A)",
    "Name": "Total Time",
    "Keyword": "TotalTime",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200C)",
    "Name": "Audio Sample Data",
    "Keyword": "AudioSampleData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200E)",
    "Name": "Audio Comments",
    "Keyword": "AudioComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2500)",
    "Name": "Curve Label",
    "Keyword": "CurveLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2600)",
    "Name": "Curve Referenced Overlay Sequence",
    "Keyword": "CurveReferencedOverlaySequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2610)",
    "Name": "Curve Referenced Overlay Group",
    "Keyword": "CurveReferencedOverlayGroup",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,3000)",
    "Name": "Curve Data",
    "Keyword": "CurveData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(5200,9229)",
    "Name": "Shared Functional Groups Sequence",
    "Keyword": "SharedFunctionalGroupsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5200,9230)",
    "Name": "Per-frame Functional Groups Sequence",
    "Keyword": "PerFrameFunctionalGroupsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0100)",
    "Name": "Waveform Sequence",
    "Keyword": "WaveformSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0110)",
    "Name": "Channel Minimum Value",
    "Keyword": "ChannelMinimumValue",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0112)",
    "Name": "Channel Maximum Value",
    "Keyword": "ChannelMaximumValue",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1004)",
    "Name": "Waveform Bits Allocated",
    "Keyword": "WaveformBitsAllocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1006)",
    "Name": "Waveform Sample Interpretation",
    "Keyword": "WaveformSampleInterpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,100A)",
    "Name": "Waveform Padding Value",
    "Keyword": "WaveformPaddingValue",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1010)",
    "Name": "Waveform Data",
    "Keyword": "WaveformData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5600,0010)",
    "Name": "First Order Phase Correction Angle",
    "Keyword": "FirstOrderPhaseCorrectionAngle",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5600,0020)",
    "Name": "Spectroscopy Data",
    "Keyword": "SpectroscopyData",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0010)",
    "Name": "Overlay Rows",
    "Keyword": "OverlayRows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0011)",
    "Name": "Overlay Columns",
    "Keyword": "OverlayColumns",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0012)",
    "Name": "Overlay Planes",
    "Keyword": "OverlayPlanes",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0015)",
    "Name": "Number of Frames in Overlay",
    "Keyword": "NumberOfFramesInOverlay",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0022)",
    "Name": "Overlay Description",
    "Keyword": "OverlayDescription",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0040)",
    "Name": "Overlay Type",
    "Keyword": "OverlayType",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0045)",
    "Name": "Overlay Subtype",
    "Keyword": "OverlaySubtype",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0050)",
    "Name": "Overlay Origin",
    "Keyword": "OverlayOrigin",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0051)",
    "Name": "Image Frame Origin",
    "Keyword": "ImageFrameOrigin",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0052)",
    "Name": "Overlay Plane Origin",
    "Keyword": "OverlayPlaneOrigin",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0060)",
    "Name": "Overlay Compression Code",
    "Keyword": "OverlayCompressionCode",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0061)",
    "Name": "Overlay Compression Originator",
    "Keyword": "OverlayCompressionOriginator",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0062)",
    "Name": "Overlay Compression Label",
    "Keyword": "OverlayCompressionLabel",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0063)",
    "Name": "Overlay Compression Description",
    "Keyword": "OverlayCompressionDescription",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0066)",
    "Name": "Overlay Compression Step Pointers",
    "Keyword": "OverlayCompressionStepPointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0068)",
    "Name": "Overlay Repeat Interval",
    "Keyword": "OverlayRepeatInterval",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0069)",
    "Name": "Overlay Bits Grouped",
    "Keyword": "OverlayBitsGrouped",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0100)",
    "Name": "Overlay Bits Allocated",
    "Keyword": "OverlayBitsAllocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0102)",
    "Name": "Overlay Bit Position",
    "Keyword": "OverlayBitPosition",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0110)",
    "Name": "Overlay Format",
    "Keyword": "OverlayFormat",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0200)",
    "Name": "Overlay Location",
    "Keyword": "OverlayLocation",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0800)",
    "Name": "Overlay Code Label",
    "Keyword": "OverlayCodeLabel",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0802)",
    "Name": "Overlay Number of Tables",
    "Keyword": "OverlayNumberOfTables",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0803)",
    "Name": "Overlay Code Table Location",
    "Keyword": "OverlayCodeTableLocation",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0804)",
    "Name": "Overlay Bits For Code Word",
    "Keyword": "OverlayBitsForCodeWord",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1001)",
    "Name": "Overlay Activation Layer",
    "Keyword": "OverlayActivationLayer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1100)",
    "Name": "Overlay Descriptor - Gray",
    "Keyword": "OverlayDescriptorGray",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1101)",
    "Name": "Overlay Descriptor - Red",
    "Keyword": "OverlayDescriptorRed",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1102)",
    "Name": "Overlay Descriptor - Green",
    "Keyword": "OverlayDescriptorGreen",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1103)",
    "Name": "Overlay Descriptor - Blue",
    "Keyword": "OverlayDescriptorBlue",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1200)",
    "Name": "Overlays - Gray",
    "Keyword": "OverlaysGray",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1201)",
    "Name": "Overlays - Red",
    "Keyword": "OverlaysRed",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1202)",
    "Name": "Overlays - Green",
    "Keyword": "OverlaysGreen",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1203)",
    "Name": "Overlays - Blue",
    "Keyword": "OverlaysBlue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1301)",
    "Name": "ROI Area",
    "Keyword": "ROIArea",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1302)",
    "Name": "ROI Mean",
    "Keyword": "ROIMean",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1303)",
    "Name": "ROI Standard Deviation",
    "Keyword": "ROIStandardDeviation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1500)",
    "Name": "Overlay Label",
    "Keyword": "OverlayLabel",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,3000)",
    "Name": "Overlay Data",
    "Keyword": "OverlayData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,4000)",
    "Name": "Overlay Comments",
    "Keyword": "OverlayComments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0010)",
    "Name": "Pixel Data",
    "Keyword": "PixelData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(7FE0,0020)",
    "Name": "Coefficients SDVN",
    "Keyword": "CoefficientsSDVN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0030)",
    "Name": "Coefficients SDHN",
    "Keyword": "CoefficientsSDHN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0040)",
    "Name": "Coefficients SDDN",
    "Keyword": "CoefficientsSDDN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0010)",
    "Name": "Variable Pixel Data",
    "Keyword": "VariablePixelData",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0011)",
    "Name": "Variable Next Data Group",
    "Keyword": "VariableNextDataGroup",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0020)",
    "Name": "Variable Coefficients SDVN",
    "Keyword": "VariableCoefficientsSDVN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0030)",
    "Name": "Variable Coefficients SDHN",
    "Keyword": "VariableCoefficientsSDHN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0040)",
    "Name": "Variable Coefficients SDDN",
    "Keyword": "VariableCoefficientsSDDN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(FFFA,FFFA)",
    "Name": "Digital Signatures Sequence",
    "Keyword": "DigitalSignaturesSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFC,FFFC)",
    "Name": "Data Set Trailing Padding",
    "Keyword": "DataSetTrailingPadding",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E000)",
    "Name": "Item",
    "Keyword": "Item",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E00D)",
    "Name": "Item Delimitation Item",
    "Keyword": "ItemDelimitationItem",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E0DD)",
    "Name": "Sequence Delimitation Item",
    "Keyword": "SequenceDelimitationItem",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0000)",
    "Name": "File Meta Information Group Length",
    "Keyword": "FileMetaInformationGroupLength",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0001)",
    "Name": "File Meta Information Version",
    "Keyword": "FileMetaInformationVersion",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0002)",
    "Name": "Media Storage SOP Class UID",
    "Keyword": "MediaStorageSOPClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0003)",
    "Name": "Media Storage SOP Instance UID",
    "Keyword": "MediaStorageSOPInstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0010)",
    "Name": "Transfer Syntax UID",
    "Keyword": "TransferSyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0012)",
    "Name": "Implementation Class UID",
    "Keyword": "ImplementationClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0013)",
    "Name": "Implementation Version Name",
    "Keyword": "ImplementationVersionName",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0016)",
    "Name": "Source Application Entity Title",
    "Keyword": "SourceApplicationEntityTitle",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0100)",
    "Name": "Private Information Creator UID",
    "Keyword": "PrivateInformationCreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0102)",
    "Name": "Private Information",
    "Keyword": "PrivateInformation",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  }
]