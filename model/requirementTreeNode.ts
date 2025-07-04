/**
 * Requirement Manager API 0.1
 * This is the Requirement Manager API for the web client Source: - [GitHub](https://github.com/ataastar/requirement-manager-api)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ata.astar@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface RequirementTreeNode { 
    /**
     * the name of the requirement
     */
    name?: string;
    /**
     * the children of the requirement
     */
    child?: Array<RequirementTreeNode>;
    /**
     * the parent requirement ID
     */
    parentId?: number;
    /**
     * description of the requirement
     */
    description?: string;
    /**
     * the requirement ID
     */
    requirementId?: number;
}

