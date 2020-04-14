export const testResult={
  "bindings": [
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"The authors who developed the ontology"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://www.w3.org/2002/07/owl#Ontology",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/tcs#author",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Author"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"The license governing the use of the resource"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://www.w3.org/2002/07/owl#Ontology",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/tcs#license",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"License"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2002/07/owl#Thing",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"The statement of rights of the owner"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://www.w3.org/2002/07/owl#Ontology",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/tcs#rights",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Rights"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Schema describing all of the structure of the documents (capabilities, roles, resources, users, databases) in the capability database used by Terminus DB to manage the internal state of the server and the databases it manages"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Terminus DB Management Schema"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Ontology"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A document that amounts to an update request, sent to the API"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#APIUpdate",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"API Update"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"http://terminusdb.com/schema/tcs#abstract",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An agent is an abstraction of a thing that can have a capability"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Agent",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Agent"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/tcs#Entity",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"http://terminusdb.com/schema/tcs#abstract",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A capability confers access to a database or server action"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Capability"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/tcs#Entity",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment":"unknown",
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#DBAction",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"DB Action"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A resource representing a database hosted on the server"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Database",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Database"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A capability to carry out some action on a specific database"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#DatabaseCapability",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Database Capability"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"http://terminusdb.com/schema/tcs#abstract",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A resource is a thing that can be accessed and given instructions and for which capabilities can be allocated"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Resource"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/tcs#Entity",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Restricts the authority scope of the Database Capability to a DB Resource"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#RestrictDBCapability",
      "http://terminusdb.com/woql/variable/Label": {
	"@language":"en",
	"@value":"Database Capabilities Apply to DBs"
      },
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Restriction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Restricts the authority scope of the Server Capability to a Server Resource"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#RestrictServerCapability",
      "http://terminusdb.com/woql/variable/Label": {
	"@language":"en",
	"@value":"Server Capabilities Apply to Servers"
      },
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Restriction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A role is a collection of capabilities that can be allocated to any user"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Role",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Role"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Agent",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A Resource Object Representing the Database Server itself"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#Server",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Server"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A capability to carry out some action on the server"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#ServerCapability",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Server Capability"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {"@language":"en", "@value":"A user of the database"},
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#User",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"User"},
      "http://terminusdb.com/woql/variable/Parent":"http://terminusdb.com/schema/terminus#Agent",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#Class"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Refers to a specific API access call"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#action",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Action"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/terminus#DBAction",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Specify which domains can access this database from the web. Set to \"*\" for universal access. Sets the HTTP Access-Control-Allow-Origin header. "
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#allow_origin",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Allow Requests from"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A property that links an agent to a capability that they possess"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Agent",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#authority",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Has Capability"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"The scope of the capability - the resource that the capability applies to"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Capability",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#authority_scope",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Capability Scope"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that fetches a Frame JSON for the appropriate Class"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#class_frame",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Class Frame"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action which creates a new database"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#create_database",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Create Database"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that creates a new document"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#create_document",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Create Document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that deletes an entire database"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#delete_database",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Delete Database"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that deletes a document from the DB"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#delete_document",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Delete Document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {"@language":"en", "@value":"The document being updated"},
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#APIUpdate",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#document",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/tcs#Entity",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A email address that allows the user to be contacted outside the system"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#User",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#email",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Email Address"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/xdd#email",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that retrieves a document from the DB"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#get_document",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Get Document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that fetches the DB Schema"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#get_schema",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Get Schema"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"The universal identifier of the underlying asset of a given resource."
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#id",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"id"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#anyURI",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An inference graph associated with the given database. All inference graphs are unioned"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Database",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#inference",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"inference"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A document / instance graph associated with the given database. All instance graphs are unioned"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Database",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#instance",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"Resource A includes Resource B if A resource_includes B i.e. A Server might include a Database within its scope"
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#resource_includes",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Resource Inclusion"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://terminusdb.com/schema/terminus#Resource",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"A schema graph associated with the given database. All schema graphs are unioned."
      },
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#Database",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#schema",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"schema"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that updates the contents of a docoument"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#update_document",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Update Document"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action that updates the DB schema"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#update_schema",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"Update Schema"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {"@language":"en", "@value":"A user key for API authentication"},
      "http://terminusdb.com/woql/variable/Domain":"http://terminusdb.com/schema/terminus#User",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#user_key_hash",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"User Key"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"http://www.w3.org/2001/XMLSchema#string",
      "http://terminusdb.com/woql/variable/Type":"http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action which returns the results of a read-only query to the DB"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#woql_select",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"WOQL Select"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    },
    {
      "http://terminusdb.com/woql/variable/Abstract":"unknown",
      "http://terminusdb.com/woql/variable/Comment": {
	"@language":"en",
	"@value":"An action which returns the results of a read-write query to the DB"
      },
      "http://terminusdb.com/woql/variable/Domain":"unknown",
      "http://terminusdb.com/woql/variable/Element":"http://terminusdb.com/schema/terminus#woql_update",
      "http://terminusdb.com/woql/variable/Label": {"@language":"en", "@value":"WOQL Update"},
      "http://terminusdb.com/woql/variable/Parent":"unknown",
      "http://terminusdb.com/woql/variable/Range":"unknown",
      "http://terminusdb.com/woql/variable/Type":"http://terminusdb.com/schema/terminus#DBAction"
    }
  ],
  "graphs": {}
}