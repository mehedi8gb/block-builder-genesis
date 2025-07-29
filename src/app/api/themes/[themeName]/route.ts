// app/api/themes/[themeName]/route.ts
import { NextResponse } from 'next/server';
import { loadThemeFile } from '@/core/utils/themeUtils';

export async function GET(
    request: Request,
    { params }: { params: { themeName: string } }
) {
    // 🚫 Allow only in development
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json(
            { error: 'Theme API is disabled in production' },
            { status: 403 }
        );
    }

    try {
        const themeData = await loadThemeFile(params.themeName);
        return NextResponse.json(themeData);
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Theme load failed' },
            { status: 500 }
        );
    }
}
