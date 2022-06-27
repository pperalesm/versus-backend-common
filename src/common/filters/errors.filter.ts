import {
  Catch,
  HttpException,
  HttpStatus,
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  HttpVersionNotSupportedException,
  PayloadTooLargeException,
  UnsupportedMediaTypeException,
  UnprocessableEntityException,
  NotImplementedException,
  ImATeapotException,
  MethodNotAllowedException,
  BadGatewayException,
  ServiceUnavailableException,
  GatewayTimeoutException,
  PreconditionFailedException,
} from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";

@Catch()
export class ErrorsFilter implements GqlExceptionFilter {
  catch(exception: any) {
    console.error(">>>>>>>>>>>>>>>>>>>");
    console.error(exception);
    console.error("<<<<<<<<<<<<<<<<<<<");

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === HttpStatus.BAD_REQUEST) {
      return new BadRequestException();
    }

    if (status === HttpStatus.UNAUTHORIZED) {
      return new UnauthorizedException();
    }

    if (status === HttpStatus.NOT_FOUND) {
      return new NotFoundException();
    }

    if (status === HttpStatus.FORBIDDEN) {
      return new ForbiddenException();
    }

    if (status === HttpStatus.NOT_ACCEPTABLE) {
      return new NotAcceptableException();
    }

    if (status === HttpStatus.REQUEST_TIMEOUT) {
      return new RequestTimeoutException();
    }

    if (status === HttpStatus.CONFLICT) {
      return new ConflictException();
    }

    if (status === HttpStatus.GONE) {
      return new GoneException();
    }

    if (status === HttpStatus.HTTP_VERSION_NOT_SUPPORTED) {
      return new HttpVersionNotSupportedException();
    }

    if (status === HttpStatus.PAYLOAD_TOO_LARGE) {
      return new PayloadTooLargeException();
    }

    if (status === HttpStatus.UNSUPPORTED_MEDIA_TYPE) {
      return new UnsupportedMediaTypeException();
    }

    if (status === HttpStatus.UNPROCESSABLE_ENTITY) {
      return new UnprocessableEntityException();
    }

    if (status === HttpStatus.NOT_IMPLEMENTED) {
      return new NotImplementedException();
    }

    if (status === HttpStatus.I_AM_A_TEAPOT) {
      return new ImATeapotException();
    }

    if (status === HttpStatus.METHOD_NOT_ALLOWED) {
      return new MethodNotAllowedException();
    }

    if (status === HttpStatus.BAD_GATEWAY) {
      return new BadGatewayException();
    }

    if (status === HttpStatus.SERVICE_UNAVAILABLE) {
      return new ServiceUnavailableException();
    }

    if (status === HttpStatus.GATEWAY_TIMEOUT) {
      return new GatewayTimeoutException();
    }

    if (status === HttpStatus.PRECONDITION_FAILED) {
      return new PreconditionFailedException();
    }

    return new InternalServerErrorException();
  }
}
