"use strict";(self.webpackChunkj_blaszyk_me=self.webpackChunkj_blaszyk_me||[]).push([[184],{1877:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(7387),o=n(8453),a=n(6540);function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",span:"span",ul:"ul",li:"li",strong:"strong",em:"em"},(0,o.R)(),e.components),{ImageComponent:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageComponent",!0),a.createElement(a.Fragment,null,a.createElement(t.p,null,"In any search application, the is an underlying ingestion pipeline that indexes the data. While developers often focus on speedy searches, they tend to overlook the aspect of data indexing. It’s important to keep in mind that easy-to-manage data ingestion is a key foundation for successful data-driven solutions."),"\n",a.createElement(t.p,null,"Elasticsearch (ES) has many ingestion tools, but sometimes they don’t fit all data sources. That’s where ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elastic Data Connectors")," come in. They let you easily link custom or proprietry data to Elasticsearch. This framework is lightweight, open-source and flexible, and works both on-premise and in the cloud. In short, it’s a straightforward way to keep any content source, e.g. database, cloud storage or local file system, in sync with a search-optimized Elasticsearch index."),"\n",a.createElement(t.p,null,"Other ingestion solutions offered by the Enterprise Search component in the Elastic stack are ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/crawler.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Web Crawler")," and ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/ingestion-apis.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Index API"),"."),"\n",a.createElement(t.h2,{id:"data-connectors-framework",style:{position:"relative"}},a.createElement(t.a,{href:"#data-connectors-framework","aria-label":"data connectors framework permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Data Connectors Framework"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://github.com/elastic/connectors",target:"_blank",rel:"nofollow noopener noreferrer"},"elastic/connectors")),"\n",a.createElement(t.p,null,"The data connectors framework makes it easier for developers to create connector clients that can sync data from other sources into Elasticsearch. The framework takes care of essential tasks like scheduling data syncs, extracting text from files, and setting up index mappings automatically. This way, developers can concentrate on integrating their chosen data source without worrying about these common tasks."),"\n",a.createElement(n,{image:e.data.mdx.frontmatter.images[1],description:"Elastic data connectors - Google Drive connector syncing data"}),"\n",a.createElement(t.p,null,"The data connectors framework can be configured to use Elasticsearch’s ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/ingest-pipelines.html",target:"_blank",rel:"nofollow noopener noreferrer"},"ingestion pipelines")," to perform transformations on data before storing it in an index. A common use case is ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/document-enrichment.html",target:"_blank",rel:"nofollow noopener noreferrer"},"document enrichment with machine learning"),". For example, you can:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"analyze text fields using a ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/machine-learning/8.10/ml-nlp-search-compare.html#ml-nlp-text-embedding",target:"_blank",rel:"nofollow noopener noreferrer"},"Text embedding")," model that will generate a dense vector representation of your data"),"\n",a.createElement(t.li,null,"run text classification for sentiment analysis"),"\n",a.createElement(t.li,null,"extract key information from text with Named Entitiy Recogintion (NER)"),"\n"),"\n",a.createElement(t.h2,{id:"architecture",style:{position:"relative"}},a.createElement(t.a,{href:"#architecture","aria-label":"architecture permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Architecture"),"\n",a.createElement(t.p,null,"The data connectors framework is deployed as a separate stateless service. You can host them yourself, or for selected native connectors run them in the Elastic Cloud natively."),"\n",a.createElement(t.p,null,"The framework ",a.createElement(t.strong,null,"connects")," your third-party data source with an Elasticsearch index and keeps it in sync, so that you can focus on search and analytics with your data."),"\n",a.createElement(n,{image:e.data.mdx.frontmatter.images[0],description:"Elastic Data Connectors Architecture"}),"\n",a.createElement(t.h2,{id:"connector-protocol",style:{position:"relative"}},a.createElement(t.a,{href:"#connector-protocol","aria-label":"connector protocol permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Connector Protocol"),"\n",a.createElement(t.p,null,"Connectors framework relies on the ",a.createElement(t.a,{href:"https://github.com/elastic/connectors/blob/main/docs/CONNECTOR_PROTOCOL.md",target:"_blank",rel:"nofollow noopener noreferrer"},"Connector Protocol"),". All communication between connectors and other parts of the stack happens asynchronously through an Elasticsearch index. This comes with several benefits."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Stateless deployment"),": The data connectors service relies on external state in an ES index"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Fault-tolerance"),": The service can resume operation on a different host after a restart or a failure. Once it reestablishes connection with Elasticsearch, it will continue its normal operation."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Developers have control over a deployment")," - This service can be easily self-hosted or run in the Elastic cloud. It only needs to be able to discover your Elasticsearch instance over the network."),"\n"),"\n",a.createElement(t.p,null,"This setup is developer friendly and aims to make connectors service easy to deploy and manage. The framework is written in async python making this IO-bound framework lightweight, fast and efficient."),"\n",a.createElement(t.h2,{id:"available-connectors",style:{position:"relative"}},a.createElement(t.a,{href:"#available-connectors","aria-label":"available connectors permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Available connectors"),"\n",a.createElement(t.p,null,"Currently, the following content sources are supported as of version ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">8.11</code>'}}),". For an up-to-date list of supported connectors check ",a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors.html",target:"_blank",rel:"nofollow noopener noreferrer"},"the official documentation"),"."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-azure-blob.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Azure Blob Storage Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-box.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Box Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-confluence.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Confluence Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-dropbox.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Dropbox Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-github.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch GitHub Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-gmail.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Gmail Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-google-cloud.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Google Cloud Storage Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-google-drive.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Google Drive Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-jira.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Jira Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-mongodb.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch MongoDB Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-ms-sql.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch MicrosoftSQL Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-mysql.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch MySQL Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-network-drive.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Network drive Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-onedrive.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch OneDrive Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-oracle.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Oracle Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-outlook.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Outlook Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-postgresql.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch PostgreSQL Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-s3.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch S3 Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-salesforce.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Salesforce Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-servicenow.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch ServiceNow Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-sharepoint-online.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch SharePoint Online Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-sharepoint.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch SharePoint Server Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-slack.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Slack Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-teams.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Teams Connector")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.elastic.co/guide/en/enterprise-search/current/connectors-zoom.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Elasticsearch Zoom Connector")),"\n"),"\n",a.createElement(t.p,null,"You can check the connector implementations in: ",a.createElement(t.a,{href:"https://github.com/elastic/connectors/tree/main/connectors/sources",target:"_blank",rel:"nofollow noopener noreferrer"},"connectors/sources"),"."),"\n",a.createElement(t.h2,{id:"custom-connectors",style:{position:"relative"}},a.createElement(t.a,{href:"#custom-connectors","aria-label":"custom connectors permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Custom connectors"),"\n",a.createElement(t.p,null,"You are not limited to the connectors included in the data connectors framework. It is easy to implement a custom data connector using the abstractions provided by the framework."),"\n",a.createElement(t.p,null,"All you need to do is define a custom ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">DataSource</code>'}})," class in async python and the framework will take care of making it compatible with common functionalities, such as scheduling data syncs, extracting text from files, and setting up index mappings automatically."),"\n",a.createElement(t.p,null,"Here is an example starting point for implementing ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">MyCustomDataSource</code>'}}),". In order to turn this into a functional connector you need to define ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">get_default_configuration</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ping</code>'}})," and ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">get_docs</code>'}})," methods."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">MyCustomDataSource</span><span class="token punctuation">(</span>BaseDataSource<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">"""Connector to my custom data source"""</span>\n\n    name <span class="token operator">=</span> <span class="token string">"Custom Source"</span>\n    service_type <span class="token operator">=</span> <span class="token string">"custom_source"</span>\n\n    <span class="token decorator annotation punctuation">@classmethod</span>\n    <span class="token keyword">def</span> <span class="token function">get_default_configuration</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""Returns a dict with a default configuration"""</span>\n        <span class="token keyword">raise</span> NotImplementedError\n\n    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">ping</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""When called, pings the backend\n\n        If the backend has an issue, raises an exception\n        """</span>\n        <span class="token keyword">raise</span> NotImplementedError\n\n   <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_docs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filtering<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""Returns an iterator on all documents present in the backend\n\n        Each document is a tuple with:\n        - a mapping with the data to index\n        - a coroutine to download extra data (attachments)\n\n        The mapping should have least an `id` field\n        and optionally a `timestamp` field in ISO 8601 UTC\n\n        The coroutine is called if the document needs to be synced\n        and has attachments. It needs to return a mapping to index.\n\n        It has two arguments: doit and timestamp\n        If doit is False, it should return None immediately.\n        If timestamp is provided, it should be used in the mapping.\n\n        Example:\n\n           async def get_file(doit=True, timestamp=None):\n               if not doit:\n                   return\n               return {\'TEXT\': \'DATA\', \'timestamp\': timestamp,\n                       \'id\': \'doc-id\'}\n        """</span>\n        <span class="token keyword">raise</span> NotImplementedError</code></pre></div>'}}),"\n",a.createElement(t.p,null,"To learn more about how to write a custom connector, refer to the ",a.createElement(t.a,{href:"https://www.elastic.co/search-labs/how-to-create-customized-connectors-for-elasticsearch",target:"_blank",rel:"nofollow noopener noreferrer"},"How to create customized connectors for Elasticsearch")," blog post or check the implementation of ",a.createElement(t.a,{href:"https://github.com/elastic/connectors/tree/main/connectors/sources",target:"_blank",rel:"nofollow noopener noreferrer"},"existing connectors"),"."),"\n",a.createElement(t.p,null,"You can use ",a.createElement(t.em,null,"Customized connector")," to configure and run your custom connector from Kibana. Navigate to: ",a.createElement(t.strong,null,"Search > Indices > Create a new index > Connector > Customized connector"),"."),"\n",a.createElement(t.p,null,"If you want to contribute your custom connector to the open-source connectors framework, refer to the ",a.createElement(t.a,{href:"https://github.com/elastic/connectors/blob/main/docs/CONTRIBUTING.md",target:"_blank",rel:"nofollow noopener noreferrer"},"How to contribute connectors guide")," in the ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">connectors</code>'}})," repository."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.R)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var s=n(4794),i=n(8156),h=n.n(i),m=n(2532),p=n(39),u=n(9203),d=n(2907),f=n(9379),g=n(5181),w=n(3303),E=n(4799),k=n(1863),y=n(7821),b=n(5765),v=n(4039),_=n(1929);const C={Link:s.Link,ImageGallery:f.A,ImageComponent:g.A,Container:k.mc,Column:k.VP,MakeItBigContainer:k.r,ThreePhotosContainer:k.Rq,LazyIframe:w.A,StatefulSliderPicker:v.a,StatefulBlockPicker:v.A};let x=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{children:e}=this.props,t=this.props.data.mdx,n=h()(this.props,"data.site.siteMetadata.title"),r=h()(this.props,"data.site.siteMetadata.siteUrl");let{previous:l,next:c}=this.props.pageContext;const i=t.frontmatter.ogimage,f=i&&(0,m.d)(i),g=h()(t,"fields.category"),w=r+"/"+g+t.fields.slug,k={"@context":"https://schema.org","@type":"BlogPosting",headline:t.frontmatter.title,datePublished:t.frontmatter.date,url:w,author:[{"@type":"Person",name:"Jedr Blaszyk",url:"https://j.blaszyk.me/"}]};return a.createElement(u.A,{location:this.props.location,title:n,tocComponent:a.createElement(_.A,t.tableOfContents)},a.createElement(d.A,{title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:t.fields.slug,image:f,structuredData:k}),a.createElement("main",null,a.createElement("article",{className:"post"},a.createElement("header",{id:"post-header"},a.createElement("h1",{style:{color:"var(--textTitle)",marginTop:"1.5rem",marginBottom:"0.5rem"}},t.frontmatter.title),a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textLink)",fontFamily:"Montserrat, sans-serif"},to:"/tech-blog/",rel:"bookmark"},a.createElement("p",null,"Tech Blog")),a.createElement("p",{style:{...(0,b.hs)(-.2),display:"block",marginBottom:(0,b.di)(1),marginTop:(0,b.di)(-.8)}},(0,y.Wy)(t.frontmatter.date),a.createElement("span",{style:{margin:"0 0.15rem"}}," • "),(0,y.Bt)(t.fields.timeToRead.minutes))),a.createElement(o.x,{components:C},e))),a.createElement("aside",null,a.createElement("nav",null,a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginLeft:0}},a.createElement("li",null,l&&a.createElement(s.Link,{to:"/"+g+l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),a.createElement("li",null,c&&a.createElement(s.Link,{to:"/"+g+c.fields.slug,rel:"next"},c.frontmatter.title," →")))),a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:(0,b.di)(.25)}},a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textLink)",fontSize:(0,b.di)(.8)},to:"/"},"Jedr's Blog")," • ",a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textLink)",fontSize:(0,b.di)(.8)},to:"/tech-blog/"},"Tech Blog")),a.createElement(p.A),a.createElement(E.A,{url:w,id:t.fields.slug,title:t.frontmatter.title})))},t}(a.Component);function S(e){return a.createElement(x,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-tech-blog-post-js-content-file-path-content-tech-blog-elasticsearch-data-connectors-index-mdx-8d449480df22a6f2ff22.js.map