/* eslint-disable */
import type { OntologyClass, TimeElement } from "./base";

export const protobufPackage = "org.phenopackets.schema.v2.core";

/** Message to indicate a disease (diagnosis) and its recorded onset. */
export interface Disease {
  /**
   * The identifier of this disease e.g. MONDO:0007043, OMIM:101600, Orphanet:710, DOID:14705 (note these are all equivalent)
   * ARGO mapping primary_diagnosis::submitter_primary_diagnosis_id
   */
  term:
    | OntologyClass
    | undefined;
  /**
   * Flag to indicate whether the disease was observed or not. Default is 'false', in other words the disease was
   * observed. Therefore it is only required in cases to indicate that the disease was looked for, but found to be
   * absent.
   * More formally, this modifier indicates the logical negation of the OntologyClass used in the 'term' field.
   * *CAUTION* It is imperative to check this field for correct interpretation of the disease!
   */
  excluded: boolean;
  /**
   * The onset of the disease. The values of this will come from the HPO onset hierarchy
   * i.e. subclasses of HP:0003674
   * FHIR mapping: Condition.onset
   * ARGO mapping primary_diagnosis::age_at_diagnosis
   */
  onset: TimeElement | undefined;
  resolution:
    | TimeElement
    | undefined;
  /**
   * Disease staging, the extent to which a disease has developed.
   * For cancers, see https://www.cancer.gov/about-cancer/diagnosis-staging/staging
   * Valid values include child terms of NCIT:C28108 (Disease Stage Qualifier)
   * ARGO mapping primary_diagnosis::clinical_tumour_staging_system
   * ARGO mapping primary_diagnosis::clinical_stage_group
   */
  diseaseStage: OntologyClass[];
  /**
   * Cancer findings in the TNM system that is relevant to the diagnosis of cancer.
   * See https://www.cancer.gov/about-cancer/diagnosis-staging/staging
   * Valid values include child terms of NCIT:C48232 (Cancer TNM Finding)
   * ARGO mapping primary_diagnosis::clinical_t_category
   * ARGO mapping primary_diagnosis::clinical_n_category
   * ARGO mapping primary_diagnosis::clinical_m_category
   */
  clinicalTnmFinding: OntologyClass[];
  /**
   * The text term used to describe the primary site of disease, as categorized by the World Health Organization's
   * (WHO) International Classification of Diseases for Oncology (ICD-O). This categorization groups cases into general
   */
  primarySite:
    | OntologyClass
    | undefined;
  /** The term used to indicate laterality of diagnosis, if applicable. (Codelist reference: NCI CDE: 4122391) */
  laterality: OntologyClass | undefined;
}
