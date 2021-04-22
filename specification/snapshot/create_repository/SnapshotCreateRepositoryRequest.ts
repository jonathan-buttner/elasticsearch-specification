/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
  SnapshotRepository,
  SnapshotRepositorySettings
} from '@snapshot/_types/SnapshotRepository'
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name snapshot.create_repository
 * @since 0.0.0
 *
 * @stability TODO
 */
export interface SnapshotCreateRepositoryRequest extends RequestBase {
  path_parts?: {
    repository: Name
  }
  query_parameters?: {
    master_timeout?: Time
    timeout?: Time
    verify?: boolean
  }
  body?: {
    repository?: SnapshotRepository
    type: string
    settings: SnapshotRepositorySettings
  }
}