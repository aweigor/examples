import { ConfigService } from '@nestjs/config';

export const getJWTConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => {
	return {
		secret: configService.get('JWT_SECRET')
	}
}