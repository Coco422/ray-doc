## Embedding

POST

```
/v1/embeddings
```

request body

```
{
  "input": "Your text string goes here",

  "model": "bge-m3"
}

```

## Rerank API

**POST**

`application/json`

/v1/rerank

---

### Request

- **Headers**
  - `Authorization`: `Bearer <token>` (required)
  - `Content-Type`: `application/json` (required)

- **Body Parameters**
  - `model`: `string` (required)  
    The model used for reranking.  
    Example: `"BAAI/bge-reranker-v2-m3"`
  - `query`: `string` (required)  
    The query string to rank documents against.  
    Example: `"Apple"`
  - `documents`: `array` (required)  
    An array of document texts to be ranked.  
    Example: `["apple", "banana", "fruit", "vegetable"]`
  - `top_n`: `integer` (optional)  
    The number of top-ranked documents to return. Default is 4.  
    Example: `4`
  - `return_documents`: `boolean` (optional)  
    Whether to return the full text of the documents in the results. Default is `false`.  
    Example: `false`
  - `max_chunks_per_doc`: `integer` (optional)  
    The maximum number of chunks per document. Default is 1024.  
    Example: `1024`
  - `overlap_tokens`: `integer` (optional)  
    The number of overlapping tokens between chunks. Default is 80.  
    Example: `80`

### Example Request

```bash
curl --request POST \
  --url https://api.siliconflow.cn/v1/rerank \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "model": "BAAI/bge-reranker-v2-m3",
  "query": "Apple",
  "documents": [
    "apple",
    "banana",
    "fruit",
    "vegetable"
  ],
  "top_n": 4,
  "return_documents": false,
  "max_chunks_per_doc": 1024,
  "overlap_tokens": 80
}'
```

### Response

- **Status Code**: `200 OK`

- **Body Parameters**
  - `id`: `string`  
    A unique identifier for the request.  
    Example: `"abc123"`
  - `results`: `array`  
    An array of objects containing the ranked documents. Each object includes:
    - `document`: `object`  
      The document object, which contains:
      - `text`: `string`  
        The text of the document. Only included if `return_documents` is `true`.  
        Example: `"apple"`
    - `index`: `integer`  
      The original index of the document in the input list.  
      Example: `0`
    - `relevance_score`: `float`  
      The relevance score of the document. Higher scores indicate higher relevance.  
      Example: `0.95`
  - `tokens`: `object`  
    An object containing token usage information:
    - `input_tokens`: `integer`  
      The number of input tokens processed.  
      Example: `123`
    - `output_tokens`: `integer`  
      The number of output tokens generated.  
      Example: `123`

### Example Response

```json
{
  "id": "abc123",
  "results": [
    {
      "document": {
        "text": "apple"
      },
      "index": 0,
      "relevance_score": 0.95
    },
    {
      "document": {
        "text": "fruit"
      },
      "index": 2,
      "relevance_score": 0.85
    },
    {
      "document": {
        "text": "banana"
      },
      "index": 1,
      "relevance_score": 0.75
    },
    {
      "document": {
        "text": "vegetable"
      },
      "index": 3,
      "relevance_score": 0.65
    }
  ],
  "tokens": {
    "input_tokens": 123,
    "output_tokens": 123
  }
}
```


## ASR

**POST**

multipart/form-data;

```
/v1/audio/transcriptions
```

---

file `file` `required`

The audio file object (not file name) to transcribe

---

model `enum<string>` `required`

Corresponding Model Name. To better enhance service quality, we will make periodic changes to the models provided by this service, including but not limited to model on/offlining and adjustments to model service capabilities. We will notify you of such changes through appropriate means such as announcements or message pushes where feasible.

Available options:

`FunAudioLLM/SenseVoiceSmall`

Example:

`"FunAudioLLM/SenseVoiceSmall"`

