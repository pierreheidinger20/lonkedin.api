

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
 

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
  ){}
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    let token = request.headers?.authorization?.replace('Bearer','').trim();

    if(!token)  throw new UnauthorizedException();

    let decodedToken:any = jwt_decode(token);

    if(!decodedToken.email) throw new UnauthorizedException();;

    return true;
  }
}
