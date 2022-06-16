import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";

@Injectable()
export class RolesGqlGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = GqlExecutionContext.create(context);

    const roles = this.reflector.get<string[]>(
      "roles",
      gqlContext.getHandler(),
    );

    if (!roles) {
      return true;
    }

    for (const role of roles) {
      if (gqlContext.getContext().req.user.role === role) {
        return true;
      }
    }

    return false;
  }
}
