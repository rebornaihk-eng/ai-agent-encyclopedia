import { NextRequest, NextResponse } from 'next/server';

// 简单的 Basic Auth 保护
export function middleware(request: NextRequest) {
  // 你的用户名和密码（生产环境应该用环境变量）
  const validUsername = 'victor';
  const validPassword = 'ai-agent-2025';  // 改成你想要的密码

  const authHeader = request.headers.get('authorization');
  
  if (authHeader) {
    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];
    
    if (user === validUsername && pass === validPassword) {
      return NextResponse.next();
    }
  }

  // 返回 401 要求认证
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="AI Agent Encyclopedia"'
    }
  });
}

// 保护所有页面
export const config = {
  matcher: ['/', '/:path*'],
};
