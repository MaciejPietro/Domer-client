/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const SettingsLazyImport = createFileRoute('/settings')()
const RegisterLazyImport = createFileRoute('/register')()
const ProjectsLazyImport = createFileRoute('/projects')()
const ProjectLazyImport = createFileRoute('/project')()
const CreatorLazyImport = createFileRoute('/creator')()
const ContactsLazyImport = createFileRoute('/contacts')()

// Create/Update Routes

const SettingsLazyRoute = SettingsLazyImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/settings.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProjectsLazyRoute = ProjectsLazyImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projects.lazy').then((d) => d.Route))

const ProjectLazyRoute = ProjectLazyImport.update({
  path: '/project',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/project.lazy').then((d) => d.Route))

const CreatorLazyRoute = CreatorLazyImport.update({
  path: '/creator',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/creator.lazy').then((d) => d.Route))

const ContactsLazyRoute = ContactsLazyImport.update({
  path: '/contacts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contacts.lazy').then((d) => d.Route))

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/contacts': {
      preLoaderRoute: typeof ContactsLazyImport
      parentRoute: typeof rootRoute
    }
    '/creator': {
      preLoaderRoute: typeof CreatorLazyImport
      parentRoute: typeof rootRoute
    }
    '/project': {
      preLoaderRoute: typeof ProjectLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      preLoaderRoute: typeof SettingsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoginRoute,
  ContactsLazyRoute,
  CreatorLazyRoute,
  ProjectLazyRoute,
  ProjectsLazyRoute,
  RegisterLazyRoute,
  SettingsLazyRoute,
])

/* prettier-ignore-end */
