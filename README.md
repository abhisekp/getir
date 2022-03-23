# Getir

### Requirements

- The code should be written in Node.js using express framework
- The endpoint should just handle HTTP POST requests.
- The application should be deployed on AWS or Heroku. You don’t need to use any API Gateway, Load Balancers or any other layer than the developed application. - The up-to-date repo should be publicly available in Github, Bitbucket or equivalent.

### Deliverables

- The public repo URL which has the source code of the project, and a set of instructions if there is any project specific configurations needed to run the project.
- The public endpoint URL of the deployed API which is available for testing.

# API

### Status

```http request
GET localhost:3000/status
```

```http response
{
  "status": "OK"
}
```

### Route Health

```http request
GET localhost:3000/health
```

```http response
{
  "status": "OK"
}
```

### Fetch Records

```http request
POST localhost:3000/records

{
  "startDate": "2020-01-01",
  "endDate": "2020-01-31",
  "maxCount": 2000,
  "minCount": 1500
}
```

```http response
{
    "code": 0,
    "msg": "Success",
    "records": []
}
```
