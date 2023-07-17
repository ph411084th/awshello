exports.handler = async (event, context) => {
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: '<h1>Hello, World!</h1>',
    };
    
    return response;
  };
  