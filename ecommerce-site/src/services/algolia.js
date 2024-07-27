import algoliasearch from "algoliasearch/lite";
const searchClient = algoliasearch("XCXOT036W0", "20901d70a084ff0f8b608456bb0583e9");
const index = searchClient.initIndex("Products"); //index name in algolia
export { searchClient, index };