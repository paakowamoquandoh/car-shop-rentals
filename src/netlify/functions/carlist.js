exports.handler = async function(event, context) {
  
    const data = [
      { type: 'sedan', count: 10 },
      { type: 'suv', count: 15 },
      { type: 'others', count: 5 }
    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };
  