mutation($phoneNumber: String!){
    sendSms(phoneNumber:$phoneNumber){
      device{
        validUntil
      }
    }
  }
  
  mutation($otpToken: String!,$phoneNumber: String!){
    verifyOtp(otpToken:$otpToken ,phoneNumber:$phoneNumber){
      token
    }
  }
  
  query{
    currentUser{
      firstName
      lastName
      id
    }
  }
  
  mutation{
    addApiary(latitude:213.23,longitude:123.23,name:"زنبورستان 2 ",regionType:"abc",regionVegetation:"234",usage:"صنعتی"){
      apiary{
        id
        name
        latitude
        longitude
        regionType
        regionVegetation
        usage
        deleted
        deleteReason
        deleteDescription
        owner {
          id
        }
      }
    }
  }
  
  query{
    apiaries{
      edges{
        node{
          id
          name
        }
      }
    }
  }
  
  mutation{
    deleteApiary(id:"QXBpYXJ5VHlwZTo4",description:"a",reason:SAFE_DELETE_REASON_1){
      success
    }
  }
  
  