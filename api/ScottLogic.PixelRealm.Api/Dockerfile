FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["ScottLogic.PixelRealm.Api/ScottLogic.PixelRealm.Api.csproj", "ScottLogic.PixelRealm.Api/"]
RUN dotnet restore "ScottLogic.PixelRealm.Api/ScottLogic.PixelRealm.Api.csproj"
COPY . .
WORKDIR "/src/ScottLogic.PixelRealm.Api"
RUN dotnet build "ScottLogic.PixelRealm.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ScottLogic.PixelRealm.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ScottLogic.PixelRealm.Api.dll"]
