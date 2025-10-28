export async function POST(request) {
    console.log("[v0] =================================")
    console.log("[v0] API route POST handler called!")
    console.log("[v0] Request URL:", request.url)
    console.log("[v0] Request method:", request.method)
    console.log("[v0] =================================")
  
    // Add CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    }
  
    try {
      const body = await request.json()
      console.log("[v0] Request body received:", body)
  
      return new Response(
        JSON.stringify({
          success: true,
          message: "Notification received successfully",
          data: body,
        }),
        {
          status: 200,
          headers,
        },
      )
    } catch (error) {
      console.error("[v0] Error in API route:", error)
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message,
        }),
        {
          status: 500,
          headers,
        },
      )
    }
  }
  
  export async function GET() {
    console.log("[v0] API route GET handler called!")
    return new Response(
      JSON.stringify({
        message: "Notification API is working - GET request",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
  
  export async function OPTIONS() {
    console.log("[v0] API route OPTIONS handler called!")
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  }
  