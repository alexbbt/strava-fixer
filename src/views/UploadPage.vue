<template>
  <div class="upload">
    <h1>Upload your Strava GPX File</h1>
    <input
      ref="file"
      type="file"
      @change="uploadFile"
    >
  </div>
</template>

<script>
// make this a drop area
import { mapActions } from 'vuex';
import { PARSE_FILE } from '../store/actions';

export default {
  name: 'UploadPage',
  mounted() {
    // return;
    // eslint-disable-next-line no-unreachable
    this.parseFile(`<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="StravaGPX" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
    <metadata>
        <time>2020-01-25T15:06:53Z</time>
    </metadata>
    <trk>
        <name>Morning Run</name>
        <type>9</type>
        <trkseg>
            <trkpt lat="40.7207380" lon="-73.9906060">
                <ele>12.1</ele>
                <time>2020-01-25T15:06:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7207920" lon="-73.9904870">
                <ele>12.1</ele>
                <time>2020-01-25T15:06:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206690" lon="-73.9905610">
                <ele>12.1</ele>
                <time>2020-01-25T15:06:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202270" lon="-73.9816790">
                <ele>5.5</ele>
                <time>2020-01-25T15:12:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202990" lon="-73.9816800">
                <ele>5.4</ele>
                <time>2020-01-25T15:12:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203470" lon="-73.9816710">
                <ele>5.4</ele>
                <time>2020-01-25T15:12:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203980" lon="-73.9816100">
                <ele>5.4</ele>
                <time>2020-01-25T15:12:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204600" lon="-73.9816010">
                <ele>5.3</ele>
                <time>2020-01-25T15:12:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205450" lon="-73.9815230">
                <ele>5.3</ele>
                <time>2020-01-25T15:12:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205940" lon="-73.9814330">
                <ele>5.3</ele>
                <time>2020-01-25T15:13:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206210" lon="-73.9813890">
                <ele>5.3</ele>
                <time>2020-01-25T15:13:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206320" lon="-73.9813230">
                <ele>5.3</ele>
                <time>2020-01-25T15:13:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206160" lon="-73.9812340">
                <ele>5.2</ele>
                <time>2020-01-25T15:13:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206180" lon="-73.9811450">
                <ele>5.2</ele>
                <time>2020-01-25T15:13:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206190" lon="-73.9810710">
                <ele>5.1</ele>
                <time>2020-01-25T15:13:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206090" lon="-73.9809800">
                <ele>5.1</ele>
                <time>2020-01-25T15:13:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205840" lon="-73.9809210">
                <ele>5</ele>
                <time>2020-01-25T15:13:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205640" lon="-73.9808040">
                <ele>5</ele>
                <time>2020-01-25T15:13:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205550" lon="-73.9806710">
                <ele>4.9</ele>
                <time>2020-01-25T15:13:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205350" lon="-73.9805810">
                <ele>4.8</ele>
                <time>2020-01-25T15:13:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205400" lon="-73.9804640">
                <ele>4.7</ele>
                <time>2020-01-25T15:13:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205150" lon="-73.9803620">
                <ele>4.7</ele>
                <time>2020-01-25T15:13:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204890" lon="-73.9803140">
                <ele>4.7</ele>
                <time>2020-01-25T15:13:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>160</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204610" lon="-73.9802020">
                <ele>4.6</ele>
                <time>2020-01-25T15:13:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204250" lon="-73.9800950">
                <ele>4.6</ele>
                <time>2020-01-25T15:13:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204090" lon="-73.9800280">
                <ele>4.6</ele>
                <time>2020-01-25T15:13:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203800" lon="-73.9799800">
                <ele>4.6</ele>
                <time>2020-01-25T15:13:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203610" lon="-73.9798940">
                <ele>4.5</ele>
                <time>2020-01-25T15:13:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203410" lon="-73.9797900">
                <ele>4.5</ele>
                <time>2020-01-25T15:13:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203170" lon="-73.9797330">
                <ele>4.4</ele>
                <time>2020-01-25T15:13:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202780" lon="-73.9796230">
                <ele>4.4</ele>
                <time>2020-01-25T15:13:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202590" lon="-73.9795510">
                <ele>4.3</ele>
                <time>2020-01-25T15:13:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202330" lon="-73.9794210">
                <ele>4.2</ele>
                <time>2020-01-25T15:14:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202260" lon="-73.9793180">
                <ele>4.1</ele>
                <time>2020-01-25T15:14:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202030" lon="-73.9791540">
                <ele>4</ele>
                <time>2020-01-25T15:14:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7201910" lon="-73.9791330">
                <ele>3.9</ele>
                <time>2020-01-25T15:14:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7201380" lon="-73.9790580">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7200900" lon="-73.9789800">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7200540" lon="-73.9789340">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199860" lon="-73.9788670">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199510" lon="-73.9788170">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199250" lon="-73.9787780">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199060" lon="-73.9787040">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7198720" lon="-73.9786530">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7197890" lon="-73.9785120">
                <ele>3.7</ele>
                <time>2020-01-25T15:14:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7197590" lon="-73.9784390">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7197310" lon="-73.9783520">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7196690" lon="-73.9782410">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7196450" lon="-73.9782160">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7195930" lon="-73.9781770">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7195850" lon="-73.9781290">
                <ele>3.8</ele>
                <time>2020-01-25T15:14:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7195410" lon="-73.9780370">
                <ele>3.6</ele>
                <time>2020-01-25T15:14:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7195120" lon="-73.9779790">
                <ele>3.6</ele>
                <time>2020-01-25T15:14:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7194880" lon="-73.9779130">
                <ele>3.5</ele>
                <time>2020-01-25T15:14:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7194630" lon="-73.9777660">
                <ele>3.3</ele>
                <time>2020-01-25T15:14:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7194140" lon="-73.9777170">
                <ele>3.2</ele>
                <time>2020-01-25T15:14:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7193600" lon="-73.9776690">
                <ele>3.1</ele>
                <time>2020-01-25T15:15:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7193270" lon="-73.9776210">
                <ele>3.1</ele>
                <time>2020-01-25T15:15:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7193030" lon="-73.9775690">
                <ele>3</ele>
                <time>2020-01-25T15:15:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7192860" lon="-73.9775010">
                <ele>2.9</ele>
                <time>2020-01-25T15:15:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7192500" lon="-73.9773430">
                <ele>2.7</ele>
                <time>2020-01-25T15:15:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7192400" lon="-73.9772370">
                <ele>2.7</ele>
                <time>2020-01-25T15:15:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7192220" lon="-73.9771310">
                <ele>2.6</ele>
                <time>2020-01-25T15:15:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7192130" lon="-73.9770540">
                <ele>2.5</ele>
                <time>2020-01-25T15:15:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191860" lon="-73.9769610">
                <ele>2.4</ele>
                <time>2020-01-25T15:15:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191820" lon="-73.9769420">
                <ele>2.4</ele>
                <time>2020-01-25T15:15:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191270" lon="-73.9767540">
                <ele>2.3</ele>
                <time>2020-01-25T15:15:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191250" lon="-73.9765960">
                <ele>2.2</ele>
                <time>2020-01-25T15:15:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190860" lon="-73.9764800">
                <ele>2.2</ele>
                <time>2020-01-25T15:15:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190420" lon="-73.9763850">
                <ele>2.1</ele>
                <time>2020-01-25T15:15:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190320" lon="-73.9762520">
                <ele>2</ele>
                <time>2020-01-25T15:15:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190420" lon="-73.9761370">
                <ele>1.9</ele>
                <time>2020-01-25T15:15:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190340" lon="-73.9760780">
                <ele>1.9</ele>
                <time>2020-01-25T15:15:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190080" lon="-73.9759590">
                <ele>1.8</ele>
                <time>2020-01-25T15:15:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189880" lon="-73.9758470">
                <ele>1.8</ele>
                <time>2020-01-25T15:15:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189660" lon="-73.9757250">
                <ele>1.7</ele>
                <time>2020-01-25T15:15:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189470" lon="-73.9755890">
                <ele>1.6</ele>
                <time>2020-01-25T15:16:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189340" lon="-73.9755320">
                <ele>1.6</ele>
                <time>2020-01-25T15:16:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189140" lon="-73.9754940">
                <ele>1.5</ele>
                <time>2020-01-25T15:16:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189140" lon="-73.9754790">
                <ele>1.5</ele>
                <time>2020-01-25T15:16:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188730" lon="-73.9753660">
                <ele>1.4</ele>
                <time>2020-01-25T15:16:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188670" lon="-73.9753310">
                <ele>1.4</ele>
                <time>2020-01-25T15:16:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188670" lon="-73.9752950">
                <ele>1.3</ele>
                <time>2020-01-25T15:16:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188550" lon="-73.9752830">
                <ele>1.3</ele>
                <time>2020-01-25T15:16:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188380" lon="-73.9752430">
                <ele>1.3</ele>
                <time>2020-01-25T15:16:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188360" lon="-73.9752090">
                <ele>1.3</ele>
                <time>2020-01-25T15:16:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>136</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188510" lon="-73.9751070">
                <ele>1.2</ele>
                <time>2020-01-25T15:17:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>136</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188560" lon="-73.9750610">
                <ele>1.2</ele>
                <time>2020-01-25T15:17:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>135</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188440" lon="-73.9750180">
                <ele>1.2</ele>
                <time>2020-01-25T15:17:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>135</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7187770" lon="-73.9749320">
                <ele>1</ele>
                <time>2020-01-25T15:17:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>135</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7187350" lon="-73.9748960">
                <ele>1</ele>
                <time>2020-01-25T15:17:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>135</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7186810" lon="-73.9748470">
                <ele>0.9</ele>
                <time>2020-01-25T15:17:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>135</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7186150" lon="-73.9747910">
                <ele>0.8</ele>
                <time>2020-01-25T15:17:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>141</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7185190" lon="-73.9747400">
                <ele>0.8</ele>
                <time>2020-01-25T15:17:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184570" lon="-73.9747290">
                <ele>0.8</ele>
                <time>2020-01-25T15:17:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7183520" lon="-73.9747070">
                <ele>0.8</ele>
                <time>2020-01-25T15:17:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182810" lon="-73.9747020">
                <ele>0.7</ele>
                <time>2020-01-25T15:17:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181640" lon="-73.9746990">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180550" lon="-73.9747080">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7179820" lon="-73.9747290">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7179140" lon="-73.9747380">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>142</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7178520" lon="-73.9747510">
                <ele>0.7</ele>
                <time>2020-01-25T15:17:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7177670" lon="-73.9747650">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7177070" lon="-73.9747570">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7176610" lon="-73.9747290">
                <ele>0.6</ele>
                <time>2020-01-25T15:17:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7176070" lon="-73.9747100">
                <ele>0.7</ele>
                <time>2020-01-25T15:17:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7175690" lon="-73.9746790">
                <ele>0.5</ele>
                <time>2020-01-25T15:17:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7175170" lon="-73.9746020">
                <ele>0.5</ele>
                <time>2020-01-25T15:18:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7174910" lon="-73.9745420">
                <ele>0.4</ele>
                <time>2020-01-25T15:18:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7174360" lon="-73.9744530">
                <ele>0.3</ele>
                <time>2020-01-25T15:18:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7174110" lon="-73.9743820">
                <ele>0.3</ele>
                <time>2020-01-25T15:18:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7173850" lon="-73.9743510">
                <ele>0.3</ele>
                <time>2020-01-25T15:18:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7173320" lon="-73.9743100">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7172710" lon="-73.9742720">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7171600" lon="-73.9742490">
                <ele>0.1</ele>
                <time>2020-01-25T15:18:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7170390" lon="-73.9742540">
                <ele>0.1</ele>
                <time>2020-01-25T15:18:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7169420" lon="-73.9742530">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7168190" lon="-73.9742550">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7167520" lon="-73.9742660">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7166850" lon="-73.9742830">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7166460" lon="-73.9742920">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7165820" lon="-73.9743160">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7165330" lon="-73.9743380">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7164630" lon="-73.9743710">
                <ele>0.1</ele>
                <time>2020-01-25T15:18:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>151</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7164130" lon="-73.9743930">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7162420" lon="-73.9744870">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7161780" lon="-73.9745110">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>154</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7160910" lon="-73.9745460">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7160320" lon="-73.9745720">
                <ele>0.2</ele>
                <time>2020-01-25T15:18:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7159380" lon="-73.9746160">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7158660" lon="-73.9746440">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7158070" lon="-73.9746610">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7157080" lon="-73.9746870">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7156430" lon="-73.9747040">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7155910" lon="-73.9747190">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7154860" lon="-73.9747790">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7154280" lon="-73.9748120">
                <ele>0.1</ele>
                <time>2020-01-25T15:19:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7153750" lon="-73.9748450">
                <ele>0.2</ele>
                <time>2020-01-25T15:19:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7152970" lon="-73.9748920">
                <ele>0.2</ele>
                <time>2020-01-25T15:19:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7152350" lon="-73.9749280">
                <ele>0.2</ele>
                <time>2020-01-25T15:19:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7151840" lon="-73.9749560">
                <ele>0.2</ele>
                <time>2020-01-25T15:19:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7151270" lon="-73.9749890">
                <ele>0.3</ele>
                <time>2020-01-25T15:19:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7150630" lon="-73.9750110">
                <ele>0.3</ele>
                <time>2020-01-25T15:19:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7150020" lon="-73.9750260">
                <ele>0.4</ele>
                <time>2020-01-25T15:19:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7149600" lon="-73.9750380">
                <ele>0.4</ele>
                <time>2020-01-25T15:19:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7148900" lon="-73.9750560">
                <ele>0.5</ele>
                <time>2020-01-25T15:19:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7148230" lon="-73.9750680">
                <ele>0.5</ele>
                <time>2020-01-25T15:19:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7147800" lon="-73.9750740">
                <ele>0.5</ele>
                <time>2020-01-25T15:19:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7147320" lon="-73.9750790">
                <ele>0.5</ele>
                <time>2020-01-25T15:19:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7146280" lon="-73.9751000">
                <ele>0.5</ele>
                <time>2020-01-25T15:19:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7145770" lon="-73.9751200">
                <ele>0.4</ele>
                <time>2020-01-25T15:19:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7145130" lon="-73.9751380">
                <ele>0.4</ele>
                <time>2020-01-25T15:19:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7144340" lon="-73.9751540">
                <ele>0.3</ele>
                <time>2020-01-25T15:20:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143800" lon="-73.9751680">
                <ele>0.3</ele>
                <time>2020-01-25T15:20:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143690" lon="-73.9751880">
                <ele>0.3</ele>
                <time>2020-01-25T15:20:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143230" lon="-73.9751520">
                <ele>0.2</ele>
                <time>2020-01-25T15:20:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7142990" lon="-73.9751110">
                <ele>0.2</ele>
                <time>2020-01-25T15:20:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7142940" lon="-73.9750780">
                <ele>0.2</ele>
                <time>2020-01-25T15:20:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143170" lon="-73.9750640">
                <ele>0.2</ele>
                <time>2020-01-25T15:20:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143290" lon="-73.9750530">
                <ele>0.2</ele>
                <time>2020-01-25T15:20:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143090" lon="-73.9750830">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7142550" lon="-73.9750940">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7142220" lon="-73.9750940">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7141420" lon="-73.9751460">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7140880" lon="-73.9751290">
                <ele>0</ele>
                <time>2020-01-25T15:20:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7139800" lon="-73.9751220">
                <ele>0</ele>
                <time>2020-01-25T15:20:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7138910" lon="-73.9751470">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7138630" lon="-73.9751680">
                <ele>0.1</ele>
                <time>2020-01-25T15:20:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7137940" lon="-73.9752260">
                <ele>0.1</ele>
                <time>2020-01-25T15:21:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7137250" lon="-73.9752760">
                <ele>0.1</ele>
                <time>2020-01-25T15:21:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7136280" lon="-73.9754050">
                <ele>-0.5</ele>
                <time>2020-01-25T15:21:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7135320" lon="-73.9755020">
                <ele>-0.4</ele>
                <time>2020-01-25T15:21:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7134690" lon="-73.9755460">
                <ele>-0.3</ele>
                <time>2020-01-25T15:21:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133860" lon="-73.9756080">
                <ele>-0.2</ele>
                <time>2020-01-25T15:21:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133240" lon="-73.9756890">
                <ele>-0.1</ele>
                <time>2020-01-25T15:21:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7132190" lon="-73.9757510">
                <ele>0.1</ele>
                <time>2020-01-25T15:21:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130920" lon="-73.9758140">
                <ele>0.2</ele>
                <time>2020-01-25T15:21:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7129200" lon="-73.9759160">
                <ele>0.3</ele>
                <time>2020-01-25T15:21:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7127320" lon="-73.9760310">
                <ele>0.4</ele>
                <time>2020-01-25T15:21:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7126290" lon="-73.9760970">
                <ele>0.4</ele>
                <time>2020-01-25T15:21:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7124760" lon="-73.9761850">
                <ele>0.5</ele>
                <time>2020-01-25T15:21:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7123960" lon="-73.9762260">
                <ele>0.5</ele>
                <time>2020-01-25T15:21:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7122770" lon="-73.9763020">
                <ele>0.7</ele>
                <time>2020-01-25T15:21:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7122040" lon="-73.9763490">
                <ele>0.8</ele>
                <time>2020-01-25T15:21:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120730" lon="-73.9764120">
                <ele>0.9</ele>
                <time>2020-01-25T15:21:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7119530" lon="-73.9764500">
                <ele>1.1</ele>
                <time>2020-01-25T15:21:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118840" lon="-73.9764890">
                <ele>1.2</ele>
                <time>2020-01-25T15:21:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7117980" lon="-73.9765560">
                <ele>1.4</ele>
                <time>2020-01-25T15:21:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7117340" lon="-73.9766080">
                <ele>1.5</ele>
                <time>2020-01-25T15:21:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7116280" lon="-73.9766700">
                <ele>1.7</ele>
                <time>2020-01-25T15:21:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7115550" lon="-73.9767380">
                <ele>1.8</ele>
                <time>2020-01-25T15:21:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7115050" lon="-73.9767990">
                <ele>1.9</ele>
                <time>2020-01-25T15:22:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7114360" lon="-73.9768870">
                <ele>1.9</ele>
                <time>2020-01-25T15:22:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7113860" lon="-73.9769480">
                <ele>1.7</ele>
                <time>2020-01-25T15:22:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7113220" lon="-73.9770320">
                <ele>1.4</ele>
                <time>2020-01-25T15:22:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7112770" lon="-73.9770860">
                <ele>1.2</ele>
                <time>2020-01-25T15:22:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7112110" lon="-73.9771620">
                <ele>0.9</ele>
                <time>2020-01-25T15:22:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7111650" lon="-73.9772150">
                <ele>0.7</ele>
                <time>2020-01-25T15:22:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7111030" lon="-73.9773030">
                <ele>0.4</ele>
                <time>2020-01-25T15:22:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7110660" lon="-73.9773630">
                <ele>0.1</ele>
                <time>2020-01-25T15:22:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7110110" lon="-73.9774470">
                <ele>0.4</ele>
                <time>2020-01-25T15:22:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7109450" lon="-73.9775400">
                <ele>0.7</ele>
                <time>2020-01-25T15:22:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7109160" lon="-73.9775800">
                <ele>0.8</ele>
                <time>2020-01-25T15:22:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7108640" lon="-73.9776440">
                <ele>1</ele>
                <time>2020-01-25T15:22:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7108380" lon="-73.9776830">
                <ele>1.1</ele>
                <time>2020-01-25T15:22:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7107900" lon="-73.9777510">
                <ele>1.2</ele>
                <time>2020-01-25T15:22:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7107440" lon="-73.9778110">
                <ele>1.1</ele>
                <time>2020-01-25T15:22:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106890" lon="-73.9778950">
                <ele>1</ele>
                <time>2020-01-25T15:22:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106300" lon="-73.9779760">
                <ele>0.8</ele>
                <time>2020-01-25T15:22:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105980" lon="-73.9780280">
                <ele>0.8</ele>
                <time>2020-01-25T15:22:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105610" lon="-73.9781460">
                <ele>0.7</ele>
                <time>2020-01-25T15:22:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105510" lon="-73.9782210">
                <ele>0.7</ele>
                <time>2020-01-25T15:22:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105350" lon="-73.9783330">
                <ele>0.5</ele>
                <time>2020-01-25T15:22:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105210" lon="-73.9784280">
                <ele>0.5</ele>
                <time>2020-01-25T15:22:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105180" lon="-73.9785090">
                <ele>0.3</ele>
                <time>2020-01-25T15:22:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105180" lon="-73.9785890">
                <ele>0.2</ele>
                <time>2020-01-25T15:23:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105250" lon="-73.9787000">
                <ele>0.2</ele>
                <time>2020-01-25T15:23:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105300" lon="-73.9788030">
                <ele>0.2</ele>
                <time>2020-01-25T15:23:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105350" lon="-73.9788700">
                <ele>0.3</ele>
                <time>2020-01-25T15:23:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105350" lon="-73.9789640">
                <ele>0.3</ele>
                <time>2020-01-25T15:23:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105380" lon="-73.9790210">
                <ele>0.3</ele>
                <time>2020-01-25T15:23:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105380" lon="-73.9791000">
                <ele>0.3</ele>
                <time>2020-01-25T15:23:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105370" lon="-73.9791580">
                <ele>0.2</ele>
                <time>2020-01-25T15:23:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105330" lon="-73.9792390">
                <ele>0.2</ele>
                <time>2020-01-25T15:23:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105200" lon="-73.9792950">
                <ele>0.3</ele>
                <time>2020-01-25T15:23:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104980" lon="-73.9793840">
                <ele>0.4</ele>
                <time>2020-01-25T15:23:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104870" lon="-73.9794510">
                <ele>0.5</ele>
                <time>2020-01-25T15:23:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104720" lon="-73.9795400">
                <ele>0.7</ele>
                <time>2020-01-25T15:23:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104640" lon="-73.9796090">
                <ele>0.8</ele>
                <time>2020-01-25T15:23:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104560" lon="-73.9797170">
                <ele>0.9</ele>
                <time>2020-01-25T15:23:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104460" lon="-73.9797640">
                <ele>0.9</ele>
                <time>2020-01-25T15:23:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104330" lon="-73.9798470">
                <ele>1</ele>
                <time>2020-01-25T15:23:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104190" lon="-73.9799410">
                <ele>1</ele>
                <time>2020-01-25T15:23:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104060" lon="-73.9800040">
                <ele>1</ele>
                <time>2020-01-25T15:23:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103910" lon="-73.9801070">
                <ele>1.1</ele>
                <time>2020-01-25T15:23:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103790" lon="-73.9801750">
                <ele>1.1</ele>
                <time>2020-01-25T15:23:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103940" lon="-73.9801860">
                <ele>1.1</ele>
                <time>2020-01-25T15:23:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104850" lon="-73.9802680">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105140" lon="-73.9803040">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105420" lon="-73.9803910">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105450" lon="-73.9804920">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105480" lon="-73.9805470">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105380" lon="-73.9806130">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105290" lon="-73.9806840">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105180" lon="-73.9807170">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105090" lon="-73.9807380">
                <ele>1.1</ele>
                <time>2020-01-25T15:24:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104860" lon="-73.9808640">
                <ele>1</ele>
                <time>2020-01-25T15:24:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104820" lon="-73.9809250">
                <ele>1</ele>
                <time>2020-01-25T15:24:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104790" lon="-73.9810100">
                <ele>1</ele>
                <time>2020-01-25T15:24:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104870" lon="-73.9811000">
                <ele>1</ele>
                <time>2020-01-25T15:24:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104960" lon="-73.9811500">
                <ele>1</ele>
                <time>2020-01-25T15:24:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105060" lon="-73.9812430">
                <ele>1</ele>
                <time>2020-01-25T15:24:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105100" lon="-73.9813280">
                <ele>1</ele>
                <time>2020-01-25T15:24:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105060" lon="-73.9813840">
                <ele>1</ele>
                <time>2020-01-25T15:24:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105080" lon="-73.9814540">
                <ele>1</ele>
                <time>2020-01-25T15:24:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104840" lon="-73.9815290">
                <ele>1</ele>
                <time>2020-01-25T15:24:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104540" lon="-73.9816210">
                <ele>1</ele>
                <time>2020-01-25T15:24:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104470" lon="-73.9816890">
                <ele>1</ele>
                <time>2020-01-25T15:24:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104040" lon="-73.9818440">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103930" lon="-73.9818950">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103770" lon="-73.9820090">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103670" lon="-73.9820890">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103580" lon="-73.9821900">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103470" lon="-73.9822700">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103420" lon="-73.9823840">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103270" lon="-73.9824680">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103460" lon="-73.9825400">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103240" lon="-73.9826670">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102940" lon="-73.9827790">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103140" lon="-73.9828270">
                <ele>0.9</ele>
                <time>2020-01-25T15:25:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103170" lon="-73.9828820">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102950" lon="-73.9829390">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103000" lon="-73.9830160">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102870" lon="-73.9830800">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102670" lon="-73.9831790">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102890" lon="-73.9831710">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102680" lon="-73.9833210">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102600" lon="-73.9834550">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102740" lon="-73.9835390">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102670" lon="-73.9836800">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102570" lon="-73.9837740">
                <ele>0.8</ele>
                <time>2020-01-25T15:25:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102880" lon="-73.9839360">
                <ele>0.8</ele>
                <time>2020-01-25T15:26:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103040" lon="-73.9840340">
                <ele>0.8</ele>
                <time>2020-01-25T15:26:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102880" lon="-73.9841610">
                <ele>0.9</ele>
                <time>2020-01-25T15:26:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102610" lon="-73.9842820">
                <ele>1.2</ele>
                <time>2020-01-25T15:26:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102630" lon="-73.9843500">
                <ele>1.4</ele>
                <time>2020-01-25T15:26:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102770" lon="-73.9844230">
                <ele>1.5</ele>
                <time>2020-01-25T15:26:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103050" lon="-73.9844560">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103120" lon="-73.9844800">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103360" lon="-73.9845440">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103590" lon="-73.9845740">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104090" lon="-73.9846440">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104200" lon="-73.9846870">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104010" lon="-73.9847930">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103610" lon="-73.9848590">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103380" lon="-73.9849210">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103060" lon="-73.9849850">
                <ele>1.6</ele>
                <time>2020-01-25T15:26:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102820" lon="-73.9850620">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102780" lon="-73.9852150">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102790" lon="-73.9852870">
                <ele>1.7</ele>
                <time>2020-01-25T15:26:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103220" lon="-73.9854050">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103390" lon="-73.9855050">
                <ele>1.8</ele>
                <time>2020-01-25T15:26:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103390" lon="-73.9855890">
                <ele>1.9</ele>
                <time>2020-01-25T15:27:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103420" lon="-73.9856580">
                <ele>1.9</ele>
                <time>2020-01-25T15:27:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103700" lon="-73.9857540">
                <ele>2</ele>
                <time>2020-01-25T15:27:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104320" lon="-73.9859100">
                <ele>2.2</ele>
                <time>2020-01-25T15:27:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104400" lon="-73.9859650">
                <ele>2.2</ele>
                <time>2020-01-25T15:27:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104920" lon="-73.9860880">
                <ele>2.3</ele>
                <time>2020-01-25T15:27:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105030" lon="-73.9861250">
                <ele>2.3</ele>
                <time>2020-01-25T15:27:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105440" lon="-73.9862010">
                <ele>2.5</ele>
                <time>2020-01-25T15:27:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105830" lon="-73.9862510">
                <ele>2.6</ele>
                <time>2020-01-25T15:27:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106280" lon="-73.9863740">
                <ele>2.7</ele>
                <time>2020-01-25T15:27:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106630" lon="-73.9865600">
                <ele>2.7</ele>
                <time>2020-01-25T15:27:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106700" lon="-73.9866840">
                <ele>2.7</ele>
                <time>2020-01-25T15:27:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106560" lon="-73.9867970">
                <ele>2.8</ele>
                <time>2020-01-25T15:27:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106420" lon="-73.9868650">
                <ele>2.8</ele>
                <time>2020-01-25T15:27:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106170" lon="-73.9869080">
                <ele>2.7</ele>
                <time>2020-01-25T15:27:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105500" lon="-73.9870880">
                <ele>2.5</ele>
                <time>2020-01-25T15:27:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105150" lon="-73.9871700">
                <ele>2.4</ele>
                <time>2020-01-25T15:27:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104800" lon="-73.9872770">
                <ele>2.3</ele>
                <time>2020-01-25T15:27:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104220" lon="-73.9874120">
                <ele>2.2</ele>
                <time>2020-01-25T15:27:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103410" lon="-73.9875050">
                <ele>2</ele>
                <time>2020-01-25T15:27:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102770" lon="-73.9875860">
                <ele>1.9</ele>
                <time>2020-01-25T15:27:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7101840" lon="-73.9877810">
                <ele>1.6</ele>
                <time>2020-01-25T15:28:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7101280" lon="-73.9879270">
                <ele>1.4</ele>
                <time>2020-01-25T15:28:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100860" lon="-73.9880120">
                <ele>1.3</ele>
                <time>2020-01-25T15:28:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100430" lon="-73.9880760">
                <ele>1.2</ele>
                <time>2020-01-25T15:28:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100030" lon="-73.9881620">
                <ele>1.1</ele>
                <time>2020-01-25T15:28:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099560" lon="-73.9882400">
                <ele>1</ele>
                <time>2020-01-25T15:28:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099450" lon="-73.9882980">
                <ele>0.9</ele>
                <time>2020-01-25T15:28:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099020" lon="-73.9883660">
                <ele>0.9</ele>
                <time>2020-01-25T15:28:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098730" lon="-73.9884850">
                <ele>0.7</ele>
                <time>2020-01-25T15:28:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098330" lon="-73.9886110">
                <ele>0.5</ele>
                <time>2020-01-25T15:28:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097950" lon="-73.9887320">
                <ele>0.1</ele>
                <time>2020-01-25T15:28:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097810" lon="-73.9888380">
                <ele>0.6</ele>
                <time>2020-01-25T15:28:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097740" lon="-73.9888800">
                <ele>0.6</ele>
                <time>2020-01-25T15:28:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097740" lon="-73.9889470">
                <ele>0.7</ele>
                <time>2020-01-25T15:28:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097070" lon="-73.9890860">
                <ele>1.5</ele>
                <time>2020-01-25T15:28:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096870" lon="-73.9891460">
                <ele>1.8</ele>
                <time>2020-01-25T15:28:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096800" lon="-73.9891820">
                <ele>1.8</ele>
                <time>2020-01-25T15:28:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096050" lon="-73.9893080">
                <ele>0.5</ele>
                <time>2020-01-25T15:28:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095290" lon="-73.9894350">
                <ele>0.5</ele>
                <time>2020-01-25T15:28:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7094950" lon="-73.9894920">
                <ele>0.6</ele>
                <time>2020-01-25T15:28:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095710" lon="-73.9896940">
                <ele>-2.8</ele>
                <time>2020-01-25T15:28:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095310" lon="-73.9897420">
                <ele>-2.8</ele>
                <time>2020-01-25T15:28:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7094730" lon="-73.9898060">
                <ele>-2.8</ele>
                <time>2020-01-25T15:28:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7094830" lon="-73.9898880">
                <ele>-2.7</ele>
                <time>2020-01-25T15:29:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7094290" lon="-73.9899390">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7093730" lon="-73.9900300">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7093430" lon="-73.9901040">
                <ele>-2.7</ele>
                <time>2020-01-25T15:29:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7092740" lon="-73.9902140">
                <ele>-2.7</ele>
                <time>2020-01-25T15:29:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7092380" lon="-73.9902510">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091770" lon="-73.9902970">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091750" lon="-73.9903680">
                <ele>-2.7</ele>
                <time>2020-01-25T15:29:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091100" lon="-73.9904370">
                <ele>-2.7</ele>
                <time>2020-01-25T15:29:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090540" lon="-73.9905140">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090290" lon="-73.9905440">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7089890" lon="-73.9906000">
                <ele>-2.8</ele>
                <time>2020-01-25T15:29:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091520" lon="-73.9906390">
                <ele>-2.5</ele>
                <time>2020-01-25T15:29:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091230" lon="-73.9906890">
                <ele>-2.4</ele>
                <time>2020-01-25T15:29:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090910" lon="-73.9907670">
                <ele>-2.4</ele>
                <time>2020-01-25T15:29:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090940" lon="-73.9907950">
                <ele>-2.4</ele>
                <time>2020-01-25T15:29:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090360" lon="-73.9908480">
                <ele>-2.4</ele>
                <time>2020-01-25T15:29:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090650" lon="-73.9907330">
                <ele>-2.5</ele>
                <time>2020-01-25T15:29:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7094130" lon="-73.9906610">
                <ele>-1.9</ele>
                <time>2020-01-25T15:30:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095210" lon="-73.9905480">
                <ele>-1.9</ele>
                <time>2020-01-25T15:30:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096040" lon="-73.9904180">
                <ele>7.9</ele>
                <time>2020-01-25T15:30:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097230" lon="-73.9902800">
                <ele>4.9</ele>
                <time>2020-01-25T15:30:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097670" lon="-73.9902240">
                <ele>0.8</ele>
                <time>2020-01-25T15:30:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098270" lon="-73.9901450">
                <ele>0.9</ele>
                <time>2020-01-25T15:30:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098970" lon="-73.9901160">
                <ele>0.9</ele>
                <time>2020-01-25T15:30:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099970" lon="-73.9900850">
                <ele>1.1</ele>
                <time>2020-01-25T15:30:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103310" lon="-73.9900200">
                <ele>1.8</ele>
                <time>2020-01-25T15:30:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106290" lon="-73.9907270">
                <ele>2.4</ele>
                <time>2020-01-25T15:30:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104420" lon="-73.9930270">
                <ele>3.2</ele>
                <time>2020-01-25T15:31:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102520" lon="-73.9936420">
                <ele>3</ele>
                <time>2020-01-25T15:31:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7101600" lon="-73.9939460">
                <ele>2.8</ele>
                <time>2020-01-25T15:31:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100350" lon="-73.9943630">
                <ele>2.5</ele>
                <time>2020-01-25T15:31:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100020" lon="-73.9944600">
                <ele>2.4</ele>
                <time>2020-01-25T15:31:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099940" lon="-73.9945810">
                <ele>2.4</ele>
                <time>2020-01-25T15:31:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099620" lon="-73.9946840">
                <ele>2.3</ele>
                <time>2020-01-25T15:31:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099300" lon="-73.9947900">
                <ele>2.3</ele>
                <time>2020-01-25T15:31:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099080" lon="-73.9948600">
                <ele>2.2</ele>
                <time>2020-01-25T15:31:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098610" lon="-73.9949450">
                <ele>2.2</ele>
                <time>2020-01-25T15:31:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098220" lon="-73.9949990">
                <ele>2.1</ele>
                <time>2020-01-25T15:31:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097790" lon="-73.9950210">
                <ele>2</ele>
                <time>2020-01-25T15:31:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096970" lon="-73.9950690">
                <ele>1.9</ele>
                <time>2020-01-25T15:31:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096470" lon="-73.9951070">
                <ele>1.8</ele>
                <time>2020-01-25T15:31:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095260" lon="-73.9952390">
                <ele>1.7</ele>
                <time>2020-01-25T15:31:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7092100" lon="-73.9956090">
                <ele>1.2</ele>
                <time>2020-01-25T15:31:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090700" lon="-73.9958850">
                <ele>1</ele>
                <time>2020-01-25T15:31:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090020" lon="-73.9960220">
                <ele>1</ele>
                <time>2020-01-25T15:31:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7089660" lon="-73.9961950">
                <ele>1</ele>
                <time>2020-01-25T15:32:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7089170" lon="-73.9963530">
                <ele>1</ele>
                <time>2020-01-25T15:32:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088800" lon="-73.9964290">
                <ele>2.9</ele>
                <time>2020-01-25T15:32:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088580" lon="-73.9965340">
                <ele>1</ele>
                <time>2020-01-25T15:32:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088510" lon="-73.9965870">
                <ele>1</ele>
                <time>2020-01-25T15:32:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088470" lon="-73.9967030">
                <ele>3.4</ele>
                <time>2020-01-25T15:32:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088500" lon="-73.9968060">
                <ele>1</ele>
                <time>2020-01-25T15:32:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088170" lon="-73.9968910">
                <ele>2.5</ele>
                <time>2020-01-25T15:32:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7087680" lon="-73.9969390">
                <ele>2.1</ele>
                <time>2020-01-25T15:32:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7087510" lon="-73.9969670">
                <ele>1.7</ele>
                <time>2020-01-25T15:32:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7087550" lon="-73.9969910">
                <ele>1.7</ele>
                <time>2020-01-25T15:32:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7087290" lon="-73.9970860">
                <ele>1.1</ele>
                <time>2020-01-25T15:32:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7086930" lon="-73.9971260">
                <ele>-0.3</ele>
                <time>2020-01-25T15:32:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7086260" lon="-73.9972530">
                <ele>-1.1</ele>
                <time>2020-01-25T15:32:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7085210" lon="-73.9973370">
                <ele>-0.3</ele>
                <time>2020-01-25T15:32:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7084750" lon="-73.9973820">
                <ele>0.2</ele>
                <time>2020-01-25T15:32:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7084140" lon="-73.9974270">
                <ele>1.1</ele>
                <time>2020-01-25T15:32:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083730" lon="-73.9974480">
                <ele>1.4</ele>
                <time>2020-01-25T15:32:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083130" lon="-73.9974970">
                <ele>1.9</ele>
                <time>2020-01-25T15:32:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082560" lon="-73.9975550">
                <ele>2</ele>
                <time>2020-01-25T15:32:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082950" lon="-73.9976340">
                <ele>2.1</ele>
                <time>2020-01-25T15:32:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083220" lon="-73.9976390">
                <ele>1.9</ele>
                <time>2020-01-25T15:32:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083650" lon="-73.9977370">
                <ele>1.4</ele>
                <time>2020-01-25T15:33:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083600" lon="-73.9978150">
                <ele>1.1</ele>
                <time>2020-01-25T15:33:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083530" lon="-73.9979190">
                <ele>1.1</ele>
                <time>2020-01-25T15:33:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083550" lon="-73.9980080">
                <ele>1.1</ele>
                <time>2020-01-25T15:33:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083520" lon="-73.9980470">
                <ele>1.1</ele>
                <time>2020-01-25T15:33:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083340" lon="-73.9980730">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082900" lon="-73.9981770">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082550" lon="-73.9982140">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082020" lon="-73.9982720">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7081490" lon="-73.9983430">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7080670" lon="-73.9983760">
                <ele>1.2</ele>
                <time>2020-01-25T15:33:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7079580" lon="-73.9984050">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7078850" lon="-73.9984040">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7077930" lon="-73.9984170">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7077440" lon="-73.9984750">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076810" lon="-73.9984830">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7075510" lon="-73.9985110">
                <ele>2.5</ele>
                <time>2020-01-25T15:33:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7074690" lon="-73.9985500">
                <ele>7.2</ele>
                <time>2020-01-25T15:33:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7074290" lon="-73.9985630">
                <ele>8.5</ele>
                <time>2020-01-25T15:33:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7073910" lon="-73.9985770">
                <ele>9.9</ele>
                <time>2020-01-25T15:33:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7073070" lon="-73.9986140">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7072020" lon="-73.9987210">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7071570" lon="-73.9987820">
                <ele>1.3</ele>
                <time>2020-01-25T15:33:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7070720" lon="-73.9988750">
                <ele>7.3</ele>
                <time>2020-01-25T15:34:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7070190" lon="-73.9989450">
                <ele>7.3</ele>
                <time>2020-01-25T15:34:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7069850" lon="-73.9989780">
                <ele>7.3</ele>
                <time>2020-01-25T15:34:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7069290" lon="-73.9990350">
                <ele>7.2</ele>
                <time>2020-01-25T15:34:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7068800" lon="-73.9990840">
                <ele>7.7</ele>
                <time>2020-01-25T15:34:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7068310" lon="-73.9991410">
                <ele>8.3</ele>
                <time>2020-01-25T15:34:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7067160" lon="-73.9992720">
                <ele>8.1</ele>
                <time>2020-01-25T15:34:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066820" lon="-73.9993120">
                <ele>8.1</ele>
                <time>2020-01-25T15:34:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066530" lon="-73.9993600">
                <ele>7.9</ele>
                <time>2020-01-25T15:34:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066420" lon="-73.9993860">
                <ele>8</ele>
                <time>2020-01-25T15:34:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065990" lon="-73.9994270">
                <ele>7.9</ele>
                <time>2020-01-25T15:34:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065610" lon="-73.9994680">
                <ele>7.8</ele>
                <time>2020-01-25T15:34:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065130" lon="-73.9995520">
                <ele>7.7</ele>
                <time>2020-01-25T15:34:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064450" lon="-73.9996330">
                <ele>7.5</ele>
                <time>2020-01-25T15:34:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7063960" lon="-73.9996750">
                <ele>7.4</ele>
                <time>2020-01-25T15:34:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7062880" lon="-73.9997470">
                <ele>7.1</ele>
                <time>2020-01-25T15:34:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7062550" lon="-73.9998110">
                <ele>7</ele>
                <time>2020-01-25T15:34:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064580" lon="-74.0005310">
                <ele>6.1</ele>
                <time>2020-01-25T15:34:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064790" lon="-74.0006070">
                <ele>6.1</ele>
                <time>2020-01-25T15:34:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064750" lon="-74.0007400">
                <ele>6.1</ele>
                <time>2020-01-25T15:34:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064910" lon="-74.0010480">
                <ele>6.2</ele>
                <time>2020-01-25T15:34:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064780" lon="-74.0010800">
                <ele>7.4</ele>
                <time>2020-01-25T15:34:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065200" lon="-74.0015500">
                <ele>2.9</ele>
                <time>2020-01-25T15:35:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065300" lon="-74.0015980">
                <ele>3.1</ele>
                <time>2020-01-25T15:35:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065850" lon="-74.0017550">
                <ele>3.6</ele>
                <time>2020-01-25T15:35:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066210" lon="-74.0018910">
                <ele>3.6</ele>
                <time>2020-01-25T15:35:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066480" lon="-74.0020240">
                <ele>3.4</ele>
                <time>2020-01-25T15:35:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066830" lon="-74.0021260">
                <ele>3.2</ele>
                <time>2020-01-25T15:35:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066820" lon="-74.0021360">
                <ele>3.2</ele>
                <time>2020-01-25T15:35:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066820" lon="-74.0021680">
                <ele>3.2</ele>
                <time>2020-01-25T15:35:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066810" lon="-74.0022380">
                <ele>3</ele>
                <time>2020-01-25T15:35:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066780" lon="-74.0022810">
                <ele>2.9</ele>
                <time>2020-01-25T15:35:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066710" lon="-74.0023710">
                <ele>2.8</ele>
                <time>2020-01-25T15:35:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066680" lon="-74.0024070">
                <ele>2.8</ele>
                <time>2020-01-25T15:35:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066740" lon="-74.0024490">
                <ele>2.7</ele>
                <time>2020-01-25T15:35:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066580" lon="-74.0024820">
                <ele>2.7</ele>
                <time>2020-01-25T15:35:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065690" lon="-74.0025140">
                <ele>2.9</ele>
                <time>2020-01-25T15:35:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065340" lon="-74.0025420">
                <ele>3</ele>
                <time>2020-01-25T15:35:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064970" lon="-74.0025310">
                <ele>3.2</ele>
                <time>2020-01-25T15:35:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064670" lon="-74.0024780">
                <ele>3.3</ele>
                <time>2020-01-25T15:35:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7063950" lon="-74.0024600">
                <ele>3.4</ele>
                <time>2020-01-25T15:35:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7063100" lon="-74.0024450">
                <ele>3.7</ele>
                <time>2020-01-25T15:35:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7062140" lon="-74.0024750">
                <ele>3.7</ele>
                <time>2020-01-25T15:35:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7061100" lon="-74.0024970">
                <ele>3.8</ele>
                <time>2020-01-25T15:36:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7060400" lon="-74.0025130">
                <ele>3.9</ele>
                <time>2020-01-25T15:36:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7059640" lon="-74.0027470">
                <ele>3.9</ele>
                <time>2020-01-25T15:36:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7058350" lon="-74.0028170">
                <ele>3.9</ele>
                <time>2020-01-25T15:36:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7057860" lon="-74.0028520">
                <ele>3.7</ele>
                <time>2020-01-25T15:36:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7056630" lon="-74.0029190">
                <ele>3.7</ele>
                <time>2020-01-25T15:36:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7055800" lon="-74.0029510">
                <ele>3.8</ele>
                <time>2020-01-25T15:36:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7055090" lon="-74.0029830">
                <ele>3.9</ele>
                <time>2020-01-25T15:36:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7054520" lon="-74.0030020">
                <ele>3.9</ele>
                <time>2020-01-25T15:36:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053740" lon="-74.0030690">
                <ele>-0.3</ele>
                <time>2020-01-25T15:36:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053220" lon="-74.0030980">
                <ele>-0.3</ele>
                <time>2020-01-25T15:36:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052970" lon="-74.0031680">
                <ele>-0.2</ele>
                <time>2020-01-25T15:36:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053380" lon="-74.0032560">
                <ele>0.3</ele>
                <time>2020-01-25T15:36:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052970" lon="-74.0033250">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052560" lon="-74.0034350">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052180" lon="-74.0034940">
                <ele>0.7</ele>
                <time>2020-01-25T15:36:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7051540" lon="-74.0035960">
                <ele>0.5</ele>
                <time>2020-01-25T15:36:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7051080" lon="-74.0037580">
                <ele>4.3</ele>
                <time>2020-01-25T15:36:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7051130" lon="-74.0039390">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7050540" lon="-74.0040080">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7050320" lon="-74.0040380">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7049380" lon="-74.0041570">
                <ele>0.8</ele>
                <time>2020-01-25T15:36:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7049000" lon="-74.0042330">
                <ele>1.3</ele>
                <time>2020-01-25T15:36:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7048570" lon="-74.0043720">
                <ele>2.2</ele>
                <time>2020-01-25T15:37:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7048120" lon="-74.0044890">
                <ele>3.7</ele>
                <time>2020-01-25T15:37:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7048040" lon="-74.0045720">
                <ele>4.8</ele>
                <time>2020-01-25T15:37:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7047720" lon="-74.0046570">
                <ele>3.9</ele>
                <time>2020-01-25T15:37:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7047280" lon="-74.0047650">
                <ele>8.3</ele>
                <time>2020-01-25T15:37:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046990" lon="-74.0048310">
                <ele>8.6</ele>
                <time>2020-01-25T15:37:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046580" lon="-74.0048950">
                <ele>8.2</ele>
                <time>2020-01-25T15:37:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045830" lon="-74.0050440">
                <ele>6.8</ele>
                <time>2020-01-25T15:37:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045430" lon="-74.0051060">
                <ele>6.1</ele>
                <time>2020-01-25T15:37:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045180" lon="-74.0051690">
                <ele>4.1</ele>
                <time>2020-01-25T15:37:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044770" lon="-74.0052740">
                <ele>4</ele>
                <time>2020-01-25T15:37:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044440" lon="-74.0053960">
                <ele>4.6</ele>
                <time>2020-01-25T15:37:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044010" lon="-74.0055090">
                <ele>4.6</ele>
                <time>2020-01-25T15:37:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7043690" lon="-74.0055900">
                <ele>4.5</ele>
                <time>2020-01-25T15:37:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7043270" lon="-74.0056650">
                <ele>4.3</ele>
                <time>2020-01-25T15:37:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7043050" lon="-74.0057030">
                <ele>4.3</ele>
                <time>2020-01-25T15:37:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042530" lon="-74.0057830">
                <ele>4.6</ele>
                <time>2020-01-25T15:37:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041920" lon="-74.0058530">
                <ele>4.5</ele>
                <time>2020-01-25T15:37:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041610" lon="-74.0058830">
                <ele>4.3</ele>
                <time>2020-01-25T15:37:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041030" lon="-74.0059130">
                <ele>4.2</ele>
                <time>2020-01-25T15:37:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7040390" lon="-74.0059480">
                <ele>4.3</ele>
                <time>2020-01-25T15:37:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7040370" lon="-74.0059490">
                <ele>4.3</ele>
                <time>2020-01-25T15:37:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7040160" lon="-74.0060180">
                <ele>-3.8</ele>
                <time>2020-01-25T15:38:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039800" lon="-74.0060690">
                <ele>-1</ele>
                <time>2020-01-25T15:38:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039470" lon="-74.0061000">
                <ele>2.3</ele>
                <time>2020-01-25T15:38:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7038970" lon="-74.0061530">
                <ele>2.4</ele>
                <time>2020-01-25T15:38:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7038510" lon="-74.0061820">
                <ele>3.2</ele>
                <time>2020-01-25T15:38:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037830" lon="-74.0062160">
                <ele>0</ele>
                <time>2020-01-25T15:38:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037370" lon="-74.0062370">
                <ele>-1.4</ele>
                <time>2020-01-25T15:38:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7036490" lon="-74.0062940">
                <ele>-2.6</ele>
                <time>2020-01-25T15:38:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7035520" lon="-74.0063520">
                <ele>-4.5</ele>
                <time>2020-01-25T15:38:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7034990" lon="-74.0063680">
                <ele>-4.8</ele>
                <time>2020-01-25T15:38:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7034070" lon="-74.0064210">
                <ele>-2.9</ele>
                <time>2020-01-25T15:38:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7033360" lon="-74.0064350">
                <ele>3.8</ele>
                <time>2020-01-25T15:38:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7032360" lon="-74.0064510">
                <ele>-1.9</ele>
                <time>2020-01-25T15:38:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7031720" lon="-74.0064720">
                <ele>-1.5</ele>
                <time>2020-01-25T15:38:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7030810" lon="-74.0065120">
                <ele>-0.7</ele>
                <time>2020-01-25T15:38:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7030170" lon="-74.0065300">
                <ele>-0.2</ele>
                <time>2020-01-25T15:38:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029820" lon="-74.0065380">
                <ele>0.1</ele>
                <time>2020-01-25T15:38:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029610" lon="-74.0065880">
                <ele>0.6</ele>
                <time>2020-01-25T15:38:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029650" lon="-74.0066630">
                <ele>2.1</ele>
                <time>2020-01-25T15:38:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029720" lon="-74.0067880">
                <ele>4.5</ele>
                <time>2020-01-25T15:38:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029720" lon="-74.0068620">
                <ele>5.3</ele>
                <time>2020-01-25T15:38:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029520" lon="-74.0068960">
                <ele>5.2</ele>
                <time>2020-01-25T15:38:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029320" lon="-74.0069650">
                <ele>4</ele>
                <time>2020-01-25T15:38:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7028880" lon="-74.0070450">
                <ele>1.1</ele>
                <time>2020-01-25T15:39:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7028230" lon="-74.0071300">
                <ele>-0.5</ele>
                <time>2020-01-25T15:39:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027990" lon="-74.0072010">
                <ele>-0.9</ele>
                <time>2020-01-25T15:39:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027790" lon="-74.0072910">
                <ele>-1</ele>
                <time>2020-01-25T15:39:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027580" lon="-74.0073380">
                <ele>-0.8</ele>
                <time>2020-01-25T15:39:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027240" lon="-74.0074280">
                <ele>-1</ele>
                <time>2020-01-25T15:39:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027490" lon="-74.0076110">
                <ele>4.1</ele>
                <time>2020-01-25T15:39:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027210" lon="-74.0076780">
                <ele>5.6</ele>
                <time>2020-01-25T15:39:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7026710" lon="-74.0077800">
                <ele>9.6</ele>
                <time>2020-01-25T15:39:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7026270" lon="-74.0078160">
                <ele>9.7</ele>
                <time>2020-01-25T15:39:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7025650" lon="-74.0079260">
                <ele>9.7</ele>
                <time>2020-01-25T15:39:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7025470" lon="-74.0081240">
                <ele>9.8</ele>
                <time>2020-01-25T15:39:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7024710" lon="-74.0082300">
                <ele>9.8</ele>
                <time>2020-01-25T15:39:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7024100" lon="-74.0083690">
                <ele>9.9</ele>
                <time>2020-01-25T15:39:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7023820" lon="-74.0084480">
                <ele>9.9</ele>
                <time>2020-01-25T15:39:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7023220" lon="-74.0085630">
                <ele>10</ele>
                <time>2020-01-25T15:39:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7023200" lon="-74.0087050">
                <ele>10.1</ele>
                <time>2020-01-25T15:39:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7022790" lon="-74.0087730">
                <ele>10.2</ele>
                <time>2020-01-25T15:39:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7022060" lon="-74.0088740">
                <ele>10.3</ele>
                <time>2020-01-25T15:39:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7021730" lon="-74.0089320">
                <ele>10.4</ele>
                <time>2020-01-25T15:39:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7021280" lon="-74.0089910">
                <ele>10.5</ele>
                <time>2020-01-25T15:39:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7021000" lon="-74.0090330">
                <ele>10.5</ele>
                <time>2020-01-25T15:39:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7020670" lon="-74.0090960">
                <ele>10.6</ele>
                <time>2020-01-25T15:39:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7020350" lon="-74.0091460">
                <ele>10.7</ele>
                <time>2020-01-25T15:40:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019830" lon="-74.0092140">
                <ele>10.7</ele>
                <time>2020-01-25T15:40:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019310" lon="-74.0092780">
                <ele>10.8</ele>
                <time>2020-01-25T15:40:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018960" lon="-74.0093320">
                <ele>10.8</ele>
                <time>2020-01-25T15:40:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018620" lon="-74.0093900">
                <ele>10.8</ele>
                <time>2020-01-25T15:40:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018370" lon="-74.0094360">
                <ele>10.8</ele>
                <time>2020-01-25T15:40:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018250" lon="-74.0094890">
                <ele>10.8</ele>
                <time>2020-01-25T15:40:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018050" lon="-74.0095490">
                <ele>11</ele>
                <time>2020-01-25T15:40:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017980" lon="-74.0095970">
                <ele>11.1</ele>
                <time>2020-01-25T15:40:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017800" lon="-74.0096890">
                <ele>11.5</ele>
                <time>2020-01-25T15:40:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017720" lon="-74.0097480">
                <ele>11.7</ele>
                <time>2020-01-25T15:40:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017670" lon="-74.0098560">
                <ele>12</ele>
                <time>2020-01-25T15:40:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017680" lon="-74.0099670">
                <ele>12.2</ele>
                <time>2020-01-25T15:40:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017740" lon="-74.0100340">
                <ele>12.2</ele>
                <time>2020-01-25T15:40:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017420" lon="-74.0101740">
                <ele>12.4</ele>
                <time>2020-01-25T15:40:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017170" lon="-74.0102830">
                <ele>12.5</ele>
                <time>2020-01-25T15:40:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016840" lon="-74.0104220">
                <ele>12.6</ele>
                <time>2020-01-25T15:40:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016660" lon="-74.0105270">
                <ele>12.7</ele>
                <time>2020-01-25T15:40:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016370" lon="-74.0106890">
                <ele>12.8</ele>
                <time>2020-01-25T15:40:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016290" lon="-74.0108040">
                <ele>12.7</ele>
                <time>2020-01-25T15:40:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016470" lon="-74.0108810">
                <ele>12.4</ele>
                <time>2020-01-25T15:40:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016840" lon="-74.0110190">
                <ele>11.5</ele>
                <time>2020-01-25T15:40:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017150" lon="-74.0110580">
                <ele>11.2</ele>
                <time>2020-01-25T15:40:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017600" lon="-74.0110790">
                <ele>11.7</ele>
                <time>2020-01-25T15:41:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017820" lon="-74.0110830">
                <ele>11.7</ele>
                <time>2020-01-25T15:41:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017820" lon="-74.0111270">
                <ele>11.6</ele>
                <time>2020-01-25T15:41:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018020" lon="-74.0112200">
                <ele>11.8</ele>
                <time>2020-01-25T15:41:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018260" lon="-74.0112790">
                <ele>11.6</ele>
                <time>2020-01-25T15:41:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018350" lon="-74.0113100">
                <ele>11.6</ele>
                <time>2020-01-25T15:41:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018410" lon="-74.0113670">
                <ele>11.5</ele>
                <time>2020-01-25T15:41:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018610" lon="-74.0113990">
                <ele>11.5</ele>
                <time>2020-01-25T15:41:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019060" lon="-74.0114440">
                <ele>11.6</ele>
                <time>2020-01-25T15:41:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019300" lon="-74.0114840">
                <ele>11.9</ele>
                <time>2020-01-25T15:41:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019310" lon="-74.0115040">
                <ele>12.1</ele>
                <time>2020-01-25T15:41:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016760" lon="-74.0116160">
                <ele>10.4</ele>
                <time>2020-01-25T15:41:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016160" lon="-74.0116830">
                <ele>13.4</ele>
                <time>2020-01-25T15:41:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015880" lon="-74.0117200">
                <ele>13.1</ele>
                <time>2020-01-25T15:41:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015320" lon="-74.0118400">
                <ele>12.9</ele>
                <time>2020-01-25T15:41:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015110" lon="-74.0118910">
                <ele>13</ele>
                <time>2020-01-25T15:41:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015010" lon="-74.0119380">
                <ele>12.7</ele>
                <time>2020-01-25T15:41:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7014980" lon="-74.0119670">
                <ele>12.6</ele>
                <time>2020-01-25T15:41:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7014650" lon="-74.0120460">
                <ele>12.5</ele>
                <time>2020-01-25T15:41:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7014280" lon="-74.0121600">
                <ele>13.4</ele>
                <time>2020-01-25T15:41:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7013750" lon="-74.0123380">
                <ele>10.8</ele>
                <time>2020-01-25T15:41:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7013660" lon="-74.0124130">
                <ele>10.7</ele>
                <time>2020-01-25T15:42:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7013740" lon="-74.0124360">
                <ele>10.6</ele>
                <time>2020-01-25T15:42:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7014250" lon="-74.0124820">
                <ele>10.6</ele>
                <time>2020-01-25T15:42:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7014680" lon="-74.0125360">
                <ele>10.3</ele>
                <time>2020-01-25T15:42:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015220" lon="-74.0125210">
                <ele>10</ele>
                <time>2020-01-25T15:42:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7015720" lon="-74.0125250">
                <ele>9.8</ele>
                <time>2020-01-25T15:42:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016430" lon="-74.0125930">
                <ele>9.7</ele>
                <time>2020-01-25T15:42:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7016760" lon="-74.0126190">
                <ele>9.7</ele>
                <time>2020-01-25T15:42:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017040" lon="-74.0126510">
                <ele>9.6</ele>
                <time>2020-01-25T15:42:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017090" lon="-74.0126490">
                <ele>9.5</ele>
                <time>2020-01-25T15:42:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7017700" lon="-74.0126660">
                <ele>9.5</ele>
                <time>2020-01-25T15:42:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018100" lon="-74.0126840">
                <ele>9.3</ele>
                <time>2020-01-25T15:42:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018360" lon="-74.0127200">
                <ele>9.3</ele>
                <time>2020-01-25T15:42:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7018800" lon="-74.0127290">
                <ele>9.2</ele>
                <time>2020-01-25T15:42:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019120" lon="-74.0127290">
                <ele>9.1</ele>
                <time>2020-01-25T15:42:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7019450" lon="-74.0127180">
                <ele>9.1</ele>
                <time>2020-01-25T15:42:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7020030" lon="-74.0127760">
                <ele>9</ele>
                <time>2020-01-25T15:42:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7020800" lon="-74.0128450">
                <ele>9.3</ele>
                <time>2020-01-25T15:42:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7021390" lon="-74.0129780">
                <ele>9.2</ele>
                <time>2020-01-25T15:42:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7021920" lon="-74.0130640">
                <ele>9.1</ele>
                <time>2020-01-25T15:42:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7022400" lon="-74.0131540">
                <ele>9</ele>
                <time>2020-01-25T15:42:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7023620" lon="-74.0134960">
                <ele>8.8</ele>
                <time>2020-01-25T15:43:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7024030" lon="-74.0135840">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7024900" lon="-74.0138200">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7025290" lon="-74.0139780">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7025570" lon="-74.0140840">
                <ele>8.8</ele>
                <time>2020-01-25T15:43:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7025970" lon="-74.0141240">
                <ele>8.8</ele>
                <time>2020-01-25T15:43:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7026630" lon="-74.0141690">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027210" lon="-74.0142880">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7027710" lon="-74.0143360">
                <ele>8.7</ele>
                <time>2020-01-25T15:43:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7028890" lon="-74.0144220">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029270" lon="-74.0144650">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7029760" lon="-74.0145410">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7031230" lon="-74.0145450">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7031330" lon="-74.0145740">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7031740" lon="-74.0146220">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7032360" lon="-74.0146560">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7032690" lon="-74.0146530">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7033140" lon="-74.0146800">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7033400" lon="-74.0147060">
                <ele>8.5</ele>
                <time>2020-01-25T15:43:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7033890" lon="-74.0147290">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7034780" lon="-74.0147230">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7035060" lon="-74.0147260">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7035540" lon="-74.0147110">
                <ele>8.6</ele>
                <time>2020-01-25T15:43:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7035670" lon="-74.0146950">
                <ele>8.5</ele>
                <time>2020-01-25T15:44:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7036180" lon="-74.0146920">
                <ele>8.6</ele>
                <time>2020-01-25T15:44:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7036760" lon="-74.0147140">
                <ele>8.5</ele>
                <time>2020-01-25T15:44:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037100" lon="-74.0147230">
                <ele>8.4</ele>
                <time>2020-01-25T15:44:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037280" lon="-74.0147320">
                <ele>8.3</ele>
                <time>2020-01-25T15:44:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037680" lon="-74.0148680">
                <ele>8.2</ele>
                <time>2020-01-25T15:44:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7037980" lon="-74.0148900">
                <ele>8.2</ele>
                <time>2020-01-25T15:44:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7038160" lon="-74.0149190">
                <ele>8.3</ele>
                <time>2020-01-25T15:44:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7038440" lon="-74.0149520">
                <ele>8.3</ele>
                <time>2020-01-25T15:44:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7038750" lon="-74.0149760">
                <ele>8.3</ele>
                <time>2020-01-25T15:44:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039010" lon="-74.0150040">
                <ele>8.2</ele>
                <time>2020-01-25T15:44:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039510" lon="-74.0150120">
                <ele>8.1</ele>
                <time>2020-01-25T15:44:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039790" lon="-74.0150380">
                <ele>8.1</ele>
                <time>2020-01-25T15:44:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039850" lon="-74.0150620">
                <ele>8</ele>
                <time>2020-01-25T15:44:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7039980" lon="-74.0152040">
                <ele>7.9</ele>
                <time>2020-01-25T15:44:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7040290" lon="-74.0153200">
                <ele>7.8</ele>
                <time>2020-01-25T15:44:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7040890" lon="-74.0154580">
                <ele>7.4</ele>
                <time>2020-01-25T15:44:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041070" lon="-74.0155580">
                <ele>7.2</ele>
                <time>2020-01-25T15:44:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041310" lon="-74.0157160">
                <ele>6.9</ele>
                <time>2020-01-25T15:45:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041450" lon="-74.0158110">
                <ele>6.6</ele>
                <time>2020-01-25T15:45:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7041720" lon="-74.0159160">
                <ele>6.4</ele>
                <time>2020-01-25T15:45:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042270" lon="-74.0160100">
                <ele>6.3</ele>
                <time>2020-01-25T15:45:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042370" lon="-74.0160940">
                <ele>6.1</ele>
                <time>2020-01-25T15:45:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042480" lon="-74.0161500">
                <ele>5.9</ele>
                <time>2020-01-25T15:45:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042610" lon="-74.0162350">
                <ele>5.8</ele>
                <time>2020-01-25T15:45:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7042860" lon="-74.0163110">
                <ele>5.5</ele>
                <time>2020-01-25T15:45:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7043130" lon="-74.0164110">
                <ele>5.4</ele>
                <time>2020-01-25T15:45:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7043510" lon="-74.0164970">
                <ele>5.3</ele>
                <time>2020-01-25T15:45:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044010" lon="-74.0165550">
                <ele>5.1</ele>
                <time>2020-01-25T15:45:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044310" lon="-74.0166490">
                <ele>4.6</ele>
                <time>2020-01-25T15:45:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044610" lon="-74.0167540">
                <ele>4.9</ele>
                <time>2020-01-25T15:45:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7044750" lon="-74.0168290">
                <ele>4.3</ele>
                <time>2020-01-25T15:45:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045030" lon="-74.0169300">
                <ele>3.5</ele>
                <time>2020-01-25T15:45:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045200" lon="-74.0170070">
                <ele>3.4</ele>
                <time>2020-01-25T15:45:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045480" lon="-74.0171070">
                <ele>3.2</ele>
                <time>2020-01-25T15:45:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045490" lon="-74.0171440">
                <ele>3.1</ele>
                <time>2020-01-25T15:45:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045570" lon="-74.0172130">
                <ele>3</ele>
                <time>2020-01-25T15:45:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045600" lon="-74.0172920">
                <ele>2.9</ele>
                <time>2020-01-25T15:45:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7045980" lon="-74.0173980">
                <ele>2.9</ele>
                <time>2020-01-25T15:45:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046160" lon="-74.0174960">
                <ele>3.8</ele>
                <time>2020-01-25T15:45:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046430" lon="-74.0175670">
                <ele>4.1</ele>
                <time>2020-01-25T15:45:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046680" lon="-74.0176770">
                <ele>5</ele>
                <time>2020-01-25T15:45:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7046950" lon="-74.0177310">
                <ele>5.3</ele>
                <time>2020-01-25T15:46:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7047370" lon="-74.0178060">
                <ele>3.2</ele>
                <time>2020-01-25T15:46:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7047690" lon="-74.0178850">
                <ele>3.9</ele>
                <time>2020-01-25T15:46:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7047950" lon="-74.0179350">
                <ele>3.9</ele>
                <time>2020-01-25T15:46:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7048350" lon="-74.0180130">
                <ele>3.9</ele>
                <time>2020-01-25T15:46:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7048920" lon="-74.0180750">
                <ele>3.9</ele>
                <time>2020-01-25T15:46:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7049750" lon="-74.0181320">
                <ele>4.3</ele>
                <time>2020-01-25T15:46:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7050220" lon="-74.0181910">
                <ele>4.7</ele>
                <time>2020-01-25T15:46:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7050830" lon="-74.0182870">
                <ele>4.3</ele>
                <time>2020-01-25T15:46:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7051520" lon="-74.0183420">
                <ele>4.1</ele>
                <time>2020-01-25T15:46:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7051820" lon="-74.0183870">
                <ele>4.1</ele>
                <time>2020-01-25T15:46:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052150" lon="-74.0184360">
                <ele>4.1</ele>
                <time>2020-01-25T15:46:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052320" lon="-74.0184920">
                <ele>4.1</ele>
                <time>2020-01-25T15:46:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052490" lon="-74.0185730">
                <ele>3.8</ele>
                <time>2020-01-25T15:46:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052660" lon="-74.0186380">
                <ele>3.5</ele>
                <time>2020-01-25T15:46:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7052900" lon="-74.0187420">
                <ele>3.4</ele>
                <time>2020-01-25T15:46:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053170" lon="-74.0188570">
                <ele>3.1</ele>
                <time>2020-01-25T15:46:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053470" lon="-74.0189370">
                <ele>2.8</ele>
                <time>2020-01-25T15:46:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7053730" lon="-74.0189970">
                <ele>2.6</ele>
                <time>2020-01-25T15:46:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7054500" lon="-74.0190830">
                <ele>2.5</ele>
                <time>2020-01-25T15:46:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7054570" lon="-74.0190930">
                <ele>2.5</ele>
                <time>2020-01-25T15:46:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7055040" lon="-74.0191240">
                <ele>2.5</ele>
                <time>2020-01-25T15:46:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7055440" lon="-74.0191200">
                <ele>2.5</ele>
                <time>2020-01-25T15:46:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7056250" lon="-74.0191240">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7056730" lon="-74.0191140">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7057270" lon="-74.0190990">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7058480" lon="-74.0190760">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7059420" lon="-74.0190440">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7059910" lon="-74.0190000">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7060690" lon="-74.0189530">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7061340" lon="-74.0189120">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7061830" lon="-74.0189020">
                <ele>2.5</ele>
                <time>2020-01-25T15:47:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7062780" lon="-74.0189030">
                <ele>2.6</ele>
                <time>2020-01-25T15:47:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7063400" lon="-74.0189210">
                <ele>2.6</ele>
                <time>2020-01-25T15:47:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064490" lon="-74.0189340">
                <ele>2.8</ele>
                <time>2020-01-25T15:47:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7064910" lon="-74.0189330">
                <ele>2.9</ele>
                <time>2020-01-25T15:47:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065420" lon="-74.0189210">
                <ele>3</ele>
                <time>2020-01-25T15:47:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065710" lon="-74.0188880">
                <ele>3.1</ele>
                <time>2020-01-25T15:47:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7065920" lon="-74.0188570">
                <ele>3.2</ele>
                <time>2020-01-25T15:47:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066530" lon="-74.0187730">
                <ele>3.4</ele>
                <time>2020-01-25T15:47:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7066820" lon="-74.0187380">
                <ele>3.5</ele>
                <time>2020-01-25T15:47:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7067400" lon="-74.0187250">
                <ele>6.3</ele>
                <time>2020-01-25T15:47:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7067970" lon="-74.0187280">
                <ele>9</ele>
                <time>2020-01-25T15:47:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7068370" lon="-74.0187270">
                <ele>10.9</ele>
                <time>2020-01-25T15:47:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7069000" lon="-74.0187070">
                <ele>13.9</ele>
                <time>2020-01-25T15:47:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7069580" lon="-74.0186910">
                <ele>16.7</ele>
                <time>2020-01-25T15:48:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7070560" lon="-74.0185900">
                <ele>9.8</ele>
                <time>2020-01-25T15:48:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7071140" lon="-74.0185610">
                <ele>6.9</ele>
                <time>2020-01-25T15:48:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7071820" lon="-74.0185350">
                <ele>3.6</ele>
                <time>2020-01-25T15:48:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7072920" lon="-74.0184710">
                <ele>3.9</ele>
                <time>2020-01-25T15:48:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7073500" lon="-74.0184630">
                <ele>4.8</ele>
                <time>2020-01-25T15:48:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7074930" lon="-74.0183970">
                <ele>6.8</ele>
                <time>2020-01-25T15:48:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7075710" lon="-74.0183370">
                <ele>7.6</ele>
                <time>2020-01-25T15:48:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076330" lon="-74.0182910">
                <ele>8.1</ele>
                <time>2020-01-25T15:48:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076740" lon="-74.0182430">
                <ele>9</ele>
                <time>2020-01-25T15:48:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076840" lon="-74.0182240">
                <ele>9</ele>
                <time>2020-01-25T15:48:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076720" lon="-74.0183330">
                <ele>8.9</ele>
                <time>2020-01-25T15:48:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076740" lon="-74.0183950">
                <ele>8.9</ele>
                <time>2020-01-25T15:48:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076830" lon="-74.0184560">
                <ele>8.9</ele>
                <time>2020-01-25T15:48:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076840" lon="-74.0185500">
                <ele>8.8</ele>
                <time>2020-01-25T15:48:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7076980" lon="-74.0186370">
                <ele>8.7</ele>
                <time>2020-01-25T15:48:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7077050" lon="-74.0186760">
                <ele>8.6</ele>
                <time>2020-01-25T15:48:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7077160" lon="-74.0186940">
                <ele>8.5</ele>
                <time>2020-01-25T15:48:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7077940" lon="-74.0187190">
                <ele>8.2</ele>
                <time>2020-01-25T15:48:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7078560" lon="-74.0187390">
                <ele>7.8</ele>
                <time>2020-01-25T15:48:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7079020" lon="-74.0187390">
                <ele>7.5</ele>
                <time>2020-01-25T15:48:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7079870" lon="-74.0187390">
                <ele>6.8</ele>
                <time>2020-01-25T15:49:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7080430" lon="-74.0187240">
                <ele>6.4</ele>
                <time>2020-01-25T15:49:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7081330" lon="-74.0186770">
                <ele>5.5</ele>
                <time>2020-01-25T15:49:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7081850" lon="-74.0186600">
                <ele>5.1</ele>
                <time>2020-01-25T15:49:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082340" lon="-74.0186550">
                <ele>4.9</ele>
                <time>2020-01-25T15:49:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7082970" lon="-74.0186560">
                <ele>4.6</ele>
                <time>2020-01-25T15:49:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7083440" lon="-74.0186360">
                <ele>4.3</ele>
                <time>2020-01-25T15:49:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7084100" lon="-74.0186070">
                <ele>3.9</ele>
                <time>2020-01-25T15:49:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7084940" lon="-74.0185990">
                <ele>3.6</ele>
                <time>2020-01-25T15:49:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7085780" lon="-74.0185780">
                <ele>3.3</ele>
                <time>2020-01-25T15:49:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7086420" lon="-74.0185780">
                <ele>3.2</ele>
                <time>2020-01-25T15:49:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7086940" lon="-74.0185780">
                <ele>3.1</ele>
                <time>2020-01-25T15:49:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7087770" lon="-74.0185660">
                <ele>2.9</ele>
                <time>2020-01-25T15:49:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7088410" lon="-74.0185810">
                <ele>2.9</ele>
                <time>2020-01-25T15:49:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7089950" lon="-74.0185180">
                <ele>2.9</ele>
                <time>2020-01-25T15:49:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090360" lon="-74.0184890">
                <ele>2.9</ele>
                <time>2020-01-25T15:49:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7090920" lon="-74.0184660">
                <ele>2.4</ele>
                <time>2020-01-25T15:49:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7091690" lon="-74.0184120">
                <ele>1.6</ele>
                <time>2020-01-25T15:49:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7092540" lon="-74.0183730">
                <ele>0.6</ele>
                <time>2020-01-25T15:49:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7093150" lon="-74.0183610">
                <ele>-0.3</ele>
                <time>2020-01-25T15:49:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7093690" lon="-74.0183690">
                <ele>-1.2</ele>
                <time>2020-01-25T15:49:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095010" lon="-74.0183620">
                <ele>-3.8</ele>
                <time>2020-01-25T15:49:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7095690" lon="-74.0183700">
                <ele>-5.2</ele>
                <time>2020-01-25T15:49:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7096530" lon="-74.0183390">
                <ele>-4.9</ele>
                <time>2020-01-25T15:50:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7097250" lon="-74.0183290">
                <ele>-4.5</ele>
                <time>2020-01-25T15:50:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7098460" lon="-74.0182790">
                <ele>-3.6</ele>
                <time>2020-01-25T15:50:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099080" lon="-74.0182470">
                <ele>-3</ele>
                <time>2020-01-25T15:50:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7099570" lon="-74.0182220">
                <ele>-2.5</ele>
                <time>2020-01-25T15:50:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7100550" lon="-74.0181880">
                <ele>-1.4</ele>
                <time>2020-01-25T15:50:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7101260" lon="-74.0181620">
                <ele>-0.4</ele>
                <time>2020-01-25T15:50:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102460" lon="-74.0180790">
                <ele>1.1</ele>
                <time>2020-01-25T15:50:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7102970" lon="-74.0180540">
                <ele>1.6</ele>
                <time>2020-01-25T15:50:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103590" lon="-74.0180190">
                <ele>2.2</ele>
                <time>2020-01-25T15:50:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7103980" lon="-74.0180080">
                <ele>2.6</ele>
                <time>2020-01-25T15:50:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104410" lon="-74.0180080">
                <ele>2.8</ele>
                <time>2020-01-25T15:50:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7104730" lon="-74.0180350">
                <ele>2.8</ele>
                <time>2020-01-25T15:50:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105060" lon="-74.0180640">
                <ele>2.7</ele>
                <time>2020-01-25T15:50:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7105340" lon="-74.0180670">
                <ele>2.7</ele>
                <time>2020-01-25T15:50:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106000" lon="-74.0180610">
                <ele>2.6</ele>
                <time>2020-01-25T15:50:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7106740" lon="-74.0180470">
                <ele>2.5</ele>
                <time>2020-01-25T15:50:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7107170" lon="-74.0180380">
                <ele>2.4</ele>
                <time>2020-01-25T15:50:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7107840" lon="-74.0180240">
                <ele>2.3</ele>
                <time>2020-01-25T15:50:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7108350" lon="-74.0180300">
                <ele>2.3</ele>
                <time>2020-01-25T15:50:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7109000" lon="-74.0180340">
                <ele>2.3</ele>
                <time>2020-01-25T15:50:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7110130" lon="-74.0180280">
                <ele>2.3</ele>
                <time>2020-01-25T15:50:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7110630" lon="-74.0180230">
                <ele>2.4</ele>
                <time>2020-01-25T15:50:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7111210" lon="-74.0179640">
                <ele>2.4</ele>
                <time>2020-01-25T15:51:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7111620" lon="-74.0179570">
                <ele>2.4</ele>
                <time>2020-01-25T15:51:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7112130" lon="-74.0179340">
                <ele>2.4</ele>
                <time>2020-01-25T15:51:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7112790" lon="-74.0179220">
                <ele>2.3</ele>
                <time>2020-01-25T15:51:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7113550" lon="-74.0179310">
                <ele>2.3</ele>
                <time>2020-01-25T15:51:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7114290" lon="-74.0178800">
                <ele>2.2</ele>
                <time>2020-01-25T15:51:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7114720" lon="-74.0178830">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7115240" lon="-74.0179030">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7115640" lon="-74.0179000">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7116430" lon="-74.0178910">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7117210" lon="-74.0178650">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7117830" lon="-74.0178410">
                <ele>2.1</ele>
                <time>2020-01-25T15:51:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118260" lon="-74.0178070">
                <ele>2.2</ele>
                <time>2020-01-25T15:51:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118450" lon="-74.0177780">
                <ele>2.2</ele>
                <time>2020-01-25T15:51:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118670" lon="-74.0177150">
                <ele>2.2</ele>
                <time>2020-01-25T15:51:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118790" lon="-74.0176600">
                <ele>4.4</ele>
                <time>2020-01-25T15:51:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118930" lon="-74.0175920">
                <ele>4.8</ele>
                <time>2020-01-25T15:51:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7118990" lon="-74.0174660">
                <ele>5.5</ele>
                <time>2020-01-25T15:51:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7119180" lon="-74.0173490">
                <ele>6.1</ele>
                <time>2020-01-25T15:51:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7119850" lon="-74.0172290">
                <ele>6.9</ele>
                <time>2020-01-25T15:51:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7119930" lon="-74.0171410">
                <ele>7.4</ele>
                <time>2020-01-25T15:51:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120000" lon="-74.0170500">
                <ele>7.8</ele>
                <time>2020-01-25T15:51:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120030" lon="-74.0169870">
                <ele>8.1</ele>
                <time>2020-01-25T15:51:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120110" lon="-74.0168940">
                <ele>8.6</ele>
                <time>2020-01-25T15:52:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120260" lon="-74.0168380">
                <ele>8.9</ele>
                <time>2020-01-25T15:52:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120330" lon="-74.0168080">
                <ele>9.1</ele>
                <time>2020-01-25T15:52:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120340" lon="-74.0167920">
                <ele>9.2</ele>
                <time>2020-01-25T15:52:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7120720" lon="-74.0167730">
                <ele>2.5</ele>
                <time>2020-01-25T15:52:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7121670" lon="-74.0167300">
                <ele>2.5</ele>
                <time>2020-01-25T15:52:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7122230" lon="-74.0167150">
                <ele>-0.1</ele>
                <time>2020-01-25T15:52:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7122840" lon="-74.0166980">
                <ele>-3.7</ele>
                <time>2020-01-25T15:52:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7123540" lon="-74.0166670">
                <ele>-3.4</ele>
                <time>2020-01-25T15:52:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7123900" lon="-74.0166640">
                <ele>-3.2</ele>
                <time>2020-01-25T15:52:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7124790" lon="-74.0166420">
                <ele>-2.9</ele>
                <time>2020-01-25T15:52:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7125480" lon="-74.0165680">
                <ele>-2.6</ele>
                <time>2020-01-25T15:52:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7126460" lon="-74.0165040">
                <ele>-2.1</ele>
                <time>2020-01-25T15:52:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7127250" lon="-74.0164310">
                <ele>-1.7</ele>
                <time>2020-01-25T15:52:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7128050" lon="-74.0163720">
                <ele>-1.3</ele>
                <time>2020-01-25T15:52:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7128810" lon="-74.0163260">
                <ele>-1</ele>
                <time>2020-01-25T15:52:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7129250" lon="-74.0162670">
                <ele>-0.7</ele>
                <time>2020-01-25T15:52:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130150" lon="-74.0162170">
                <ele>-0.3</ele>
                <time>2020-01-25T15:52:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130410" lon="-74.0161980">
                <ele>-0.2</ele>
                <time>2020-01-25T15:52:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130740" lon="-74.0161020">
                <ele>0.2</ele>
                <time>2020-01-25T15:52:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7131340" lon="-74.0160700">
                <ele>0.5</ele>
                <time>2020-01-25T15:52:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7131390" lon="-74.0160400">
                <ele>0.2</ele>
                <time>2020-01-25T15:52:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130830" lon="-74.0160220">
                <ele>-0.9</ele>
                <time>2020-01-25T15:53:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7130860" lon="-74.0160780">
                <ele>-1.5</ele>
                <time>2020-01-25T15:53:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7131770" lon="-74.0160820">
                <ele>0.9</ele>
                <time>2020-01-25T15:53:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7131950" lon="-74.0160340">
                <ele>0.9</ele>
                <time>2020-01-25T15:53:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7132160" lon="-74.0159850">
                <ele>0.2</ele>
                <time>2020-01-25T15:53:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7132310" lon="-74.0160000">
                <ele>-0.1</ele>
                <time>2020-01-25T15:53:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133420" lon="-74.0159750">
                <ele>2.9</ele>
                <time>2020-01-25T15:53:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133460" lon="-74.0159810">
                <ele>2.9</ele>
                <time>2020-01-25T15:53:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133640" lon="-74.0160870">
                <ele>2.9</ele>
                <time>2020-01-25T15:53:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133940" lon="-74.0160570">
                <ele>2.9</ele>
                <time>2020-01-25T15:53:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133940" lon="-74.0163540">
                <ele>2.7</ele>
                <time>2020-01-25T15:53:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7133790" lon="-74.0165390">
                <ele>2.6</ele>
                <time>2020-01-25T15:53:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7134310" lon="-74.0167430">
                <ele>2.6</ele>
                <time>2020-01-25T15:53:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7134590" lon="-74.0168230">
                <ele>2.8</ele>
                <time>2020-01-25T15:53:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7135450" lon="-74.0170100">
                <ele>2.1</ele>
                <time>2020-01-25T15:53:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7135980" lon="-74.0171080">
                <ele>1.2</ele>
                <time>2020-01-25T15:53:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7136310" lon="-74.0171370">
                <ele>0.8</ele>
                <time>2020-01-25T15:54:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7136880" lon="-74.0171550">
                <ele>0.2</ele>
                <time>2020-01-25T15:54:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7137480" lon="-74.0172260">
                <ele>-0.4</ele>
                <time>2020-01-25T15:54:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7138530" lon="-74.0172700">
                <ele>-0.6</ele>
                <time>2020-01-25T15:54:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7139480" lon="-74.0172780">
                <ele>-0.4</ele>
                <time>2020-01-25T15:54:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7140870" lon="-74.0172720">
                <ele>0</ele>
                <time>2020-01-25T15:54:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7141820" lon="-74.0172390">
                <ele>0.6</ele>
                <time>2020-01-25T15:54:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7142550" lon="-74.0172060">
                <ele>1.1</ele>
                <time>2020-01-25T15:54:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143390" lon="-74.0172130">
                <ele>1.8</ele>
                <time>2020-01-25T15:54:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7143980" lon="-74.0172040">
                <ele>2.4</ele>
                <time>2020-01-25T15:54:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7145280" lon="-74.0172320">
                <ele>3.6</ele>
                <time>2020-01-25T15:54:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7145750" lon="-74.0172510">
                <ele>4</ele>
                <time>2020-01-25T15:54:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7146170" lon="-74.0172520">
                <ele>4.4</ele>
                <time>2020-01-25T15:54:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7146910" lon="-74.0172600">
                <ele>5.1</ele>
                <time>2020-01-25T15:54:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7147470" lon="-74.0172800">
                <ele>5.4</ele>
                <time>2020-01-25T15:54:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7148230" lon="-74.0173020">
                <ele>5.8</ele>
                <time>2020-01-25T15:54:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7148720" lon="-74.0173140">
                <ele>6</ele>
                <time>2020-01-25T15:54:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7149340" lon="-74.0173350">
                <ele>6.5</ele>
                <time>2020-01-25T15:54:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7150070" lon="-74.0173660">
                <ele>6.3</ele>
                <time>2020-01-25T15:54:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7150580" lon="-74.0173760">
                <ele>6.2</ele>
                <time>2020-01-25T15:54:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7151350" lon="-74.0173870">
                <ele>5.5</ele>
                <time>2020-01-25T15:54:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7151900" lon="-74.0173770">
                <ele>5</ele>
                <time>2020-01-25T15:54:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7152190" lon="-74.0173740">
                <ele>4.8</ele>
                <time>2020-01-25T15:54:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7152890" lon="-74.0173140">
                <ele>4.2</ele>
                <time>2020-01-25T15:55:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7153820" lon="-74.0172710">
                <ele>3.5</ele>
                <time>2020-01-25T15:55:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7154610" lon="-74.0172380">
                <ele>2.9</ele>
                <time>2020-01-25T15:55:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7155420" lon="-74.0171930">
                <ele>2.4</ele>
                <time>2020-01-25T15:55:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7155910" lon="-74.0171670">
                <ele>2.4</ele>
                <time>2020-01-25T15:55:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7156770" lon="-74.0171140">
                <ele>2.4</ele>
                <time>2020-01-25T15:55:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7157900" lon="-74.0170350">
                <ele>2.5</ele>
                <time>2020-01-25T15:55:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7158270" lon="-74.0170320">
                <ele>2.5</ele>
                <time>2020-01-25T15:55:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7159020" lon="-74.0170340">
                <ele>2.5</ele>
                <time>2020-01-25T15:55:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7159500" lon="-74.0170320">
                <ele>2.5</ele>
                <time>2020-01-25T15:55:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7160130" lon="-74.0171050">
                <ele>2.5</ele>
                <time>2020-01-25T15:55:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7160730" lon="-74.0171490">
                <ele>2.6</ele>
                <time>2020-01-25T15:55:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7161160" lon="-74.0172010">
                <ele>2.6</ele>
                <time>2020-01-25T15:55:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7161550" lon="-74.0171890">
                <ele>2.6</ele>
                <time>2020-01-25T15:55:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7162620" lon="-74.0170980">
                <ele>2.6</ele>
                <time>2020-01-25T15:55:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7163100" lon="-74.0170660">
                <ele>2.7</ele>
                <time>2020-01-25T15:55:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7163970" lon="-74.0170220">
                <ele>2.7</ele>
                <time>2020-01-25T15:55:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7164800" lon="-74.0169910">
                <ele>2.8</ele>
                <time>2020-01-25T15:55:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7165250" lon="-74.0169740">
                <ele>2.8</ele>
                <time>2020-01-25T15:55:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7166000" lon="-74.0169410">
                <ele>2.9</ele>
                <time>2020-01-25T15:55:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7166490" lon="-74.0169190">
                <ele>2.9</ele>
                <time>2020-01-25T15:55:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7167390" lon="-74.0168630">
                <ele>2.9</ele>
                <time>2020-01-25T15:55:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7168260" lon="-74.0168300">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7169550" lon="-74.0167900">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7170270" lon="-74.0167720">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7170770" lon="-74.0167530">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7171510" lon="-74.0167460">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7172350" lon="-74.0167360">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7172830" lon="-74.0167330">
                <ele>2.9</ele>
                <time>2020-01-25T15:56:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7173590" lon="-74.0167590">
                <ele>2.8</ele>
                <time>2020-01-25T15:56:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7174450" lon="-74.0167080">
                <ele>2.7</ele>
                <time>2020-01-25T15:56:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7175310" lon="-74.0166780">
                <ele>2.7</ele>
                <time>2020-01-25T15:56:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7175780" lon="-74.0166860">
                <ele>2.6</ele>
                <time>2020-01-25T15:56:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7175940" lon="-74.0167010">
                <ele>2.6</ele>
                <time>2020-01-25T15:56:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7176440" lon="-74.0166990">
                <ele>2.5</ele>
                <time>2020-01-25T15:56:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7176950" lon="-74.0166930">
                <ele>2.4</ele>
                <time>2020-01-25T15:56:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7177430" lon="-74.0166630">
                <ele>2.4</ele>
                <time>2020-01-25T15:56:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7178530" lon="-74.0166250">
                <ele>2.2</ele>
                <time>2020-01-25T15:56:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7179720" lon="-74.0165890">
                <ele>2</ele>
                <time>2020-01-25T15:56:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180420" lon="-74.0165290">
                <ele>2.1</ele>
                <time>2020-01-25T15:56:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181170" lon="-74.0164330">
                <ele>2.4</ele>
                <time>2020-01-25T15:56:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181520" lon="-74.0163540">
                <ele>2.6</ele>
                <time>2020-01-25T15:56:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181640" lon="-74.0162960">
                <ele>2.6</ele>
                <time>2020-01-25T15:56:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181640" lon="-74.0162080">
                <ele>2.6</ele>
                <time>2020-01-25T15:56:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181760" lon="-74.0161060">
                <ele>2.5</ele>
                <time>2020-01-25T15:56:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181780" lon="-74.0160530">
                <ele>2.5</ele>
                <time>2020-01-25T15:57:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181620" lon="-74.0159610">
                <ele>2.5</ele>
                <time>2020-01-25T15:57:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181650" lon="-74.0158650">
                <ele>2.8</ele>
                <time>2020-01-25T15:57:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181330" lon="-74.0158320">
                <ele>3.2</ele>
                <time>2020-01-25T15:57:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181310" lon="-74.0157370">
                <ele>3.5</ele>
                <time>2020-01-25T15:57:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181360" lon="-74.0156730">
                <ele>3.7</ele>
                <time>2020-01-25T15:57:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181220" lon="-74.0155820">
                <ele>4</ele>
                <time>2020-01-25T15:57:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181210" lon="-74.0154710">
                <ele>4.5</ele>
                <time>2020-01-25T15:57:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181050" lon="-74.0154170">
                <ele>5.2</ele>
                <time>2020-01-25T15:57:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180880" lon="-74.0153280">
                <ele>6</ele>
                <time>2020-01-25T15:57:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180760" lon="-74.0152660">
                <ele>6.4</ele>
                <time>2020-01-25T15:57:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180670" lon="-74.0152050">
                <ele>6.3</ele>
                <time>2020-01-25T15:57:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180590" lon="-74.0151170">
                <ele>6.3</ele>
                <time>2020-01-25T15:57:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180560" lon="-74.0150530">
                <ele>6.3</ele>
                <time>2020-01-25T15:57:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180600" lon="-74.0149680">
                <ele>6.3</ele>
                <time>2020-01-25T15:57:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181130" lon="-74.0149230">
                <ele>6.3</ele>
                <time>2020-01-25T15:57:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181150" lon="-74.0148710">
                <ele>6.4</ele>
                <time>2020-01-25T15:57:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181160" lon="-74.0148000">
                <ele>6.5</ele>
                <time>2020-01-25T15:57:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181090" lon="-74.0147100">
                <ele>6.6</ele>
                <time>2020-01-25T15:57:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181050" lon="-74.0146520">
                <ele>6.6</ele>
                <time>2020-01-25T15:57:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181010" lon="-74.0145600">
                <ele>6.5</ele>
                <time>2020-01-25T15:57:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7180960" lon="-74.0144730">
                <ele>6.4</ele>
                <time>2020-01-25T15:57:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181590" lon="-74.0143930">
                <ele>6.1</ele>
                <time>2020-01-25T15:57:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7181560" lon="-74.0143220">
                <ele>6</ele>
                <time>2020-01-25T15:58:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182000" lon="-74.0142510">
                <ele>5.9</ele>
                <time>2020-01-25T15:58:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182130" lon="-74.0141750">
                <ele>5.8</ele>
                <time>2020-01-25T15:58:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182260" lon="-74.0141300">
                <ele>5.7</ele>
                <time>2020-01-25T15:58:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182610" lon="-74.0140630">
                <ele>5.9</ele>
                <time>2020-01-25T15:58:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7182800" lon="-74.0140090">
                <ele>6.3</ele>
                <time>2020-01-25T15:58:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7183210" lon="-74.0139560">
                <ele>5.7</ele>
                <time>2020-01-25T15:58:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7183720" lon="-74.0138820">
                <ele>5.3</ele>
                <time>2020-01-25T15:58:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184080" lon="-74.0137940">
                <ele>4.3</ele>
                <time>2020-01-25T15:58:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184280" lon="-74.0137250">
                <ele>6.3</ele>
                <time>2020-01-25T15:58:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184560" lon="-74.0136370">
                <ele>-257.6</ele>
                <time>2020-01-25T15:58:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184680" lon="-74.0135850">
                <ele>4.5</ele>
                <time>2020-01-25T15:58:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184700" lon="-74.0135310">
                <ele>5.1</ele>
                <time>2020-01-25T15:58:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184930" lon="-74.0134960">
                <ele>4.9</ele>
                <time>2020-01-25T15:58:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184860" lon="-74.0134970">
                <ele>5</ele>
                <time>2020-01-25T15:58:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7184960" lon="-74.0134160">
                <ele>5.7</ele>
                <time>2020-01-25T15:58:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7185240" lon="-74.0134040">
                <ele>5</ele>
                <time>2020-01-25T15:58:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7185500" lon="-74.0133710">
                <ele>4.3</ele>
                <time>2020-01-25T15:58:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7185970" lon="-74.0133520">
                <ele>3.6</ele>
                <time>2020-01-25T15:58:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7186600" lon="-74.0133100">
                <ele>2.3</ele>
                <time>2020-01-25T15:59:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7186990" lon="-74.0132900">
                <ele>2.2</ele>
                <time>2020-01-25T15:59:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7187550" lon="-74.0132710">
                <ele>2.1</ele>
                <time>2020-01-25T15:59:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7188090" lon="-74.0132420">
                <ele>2.1</ele>
                <time>2020-01-25T15:59:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189050" lon="-74.0131990">
                <ele>2</ele>
                <time>2020-01-25T15:59:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7189710" lon="-74.0131650">
                <ele>2</ele>
                <time>2020-01-25T15:59:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>171</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7190650" lon="-74.0131380">
                <ele>1.9</ele>
                <time>2020-01-25T15:59:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191030" lon="-74.0131240">
                <ele>1.8</ele>
                <time>2020-01-25T15:59:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7191750" lon="-74.0130940">
                <ele>1.5</ele>
                <time>2020-01-25T15:59:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7193100" lon="-74.0130370">
                <ele>1.5</ele>
                <time>2020-01-25T15:59:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7193830" lon="-74.0130060">
                <ele>1.8</ele>
                <time>2020-01-25T15:59:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7194740" lon="-74.0129800">
                <ele>2.1</ele>
                <time>2020-01-25T15:59:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7195310" lon="-74.0129450">
                <ele>2.2</ele>
                <time>2020-01-25T15:59:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7196130" lon="-74.0129120">
                <ele>2.3</ele>
                <time>2020-01-25T15:59:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7196610" lon="-74.0128970">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7197140" lon="-74.0128780">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7197710" lon="-74.0128460">
                <ele>2.5</ele>
                <time>2020-01-25T15:59:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7198100" lon="-74.0128550">
                <ele>2.5</ele>
                <time>2020-01-25T15:59:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7198550" lon="-74.0128540">
                <ele>2.5</ele>
                <time>2020-01-25T15:59:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199010" lon="-74.0128650">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199470" lon="-74.0129080">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7199850" lon="-74.0128980">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7200650" lon="-74.0129160">
                <ele>2.4</ele>
                <time>2020-01-25T15:59:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7201160" lon="-74.0129390">
                <ele>2.3</ele>
                <time>2020-01-25T15:59:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7201910" lon="-74.0129580">
                <ele>2.3</ele>
                <time>2020-01-25T16:00:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7201780" lon="-74.0129940">
                <ele>2.3</ele>
                <time>2020-01-25T16:00:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7202640" lon="-74.0130110">
                <ele>2.2</ele>
                <time>2020-01-25T16:00:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203140" lon="-74.0130170">
                <ele>2.2</ele>
                <time>2020-01-25T16:00:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7203350" lon="-74.0130410">
                <ele>2.2</ele>
                <time>2020-01-25T16:00:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204350" lon="-74.0130500">
                <ele>2.4</ele>
                <time>2020-01-25T16:00:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204790" lon="-74.0130050">
                <ele>2.3</ele>
                <time>2020-01-25T16:00:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7204850" lon="-74.0129270">
                <ele>2.2</ele>
                <time>2020-01-25T16:00:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7205410" lon="-74.0128660">
                <ele>2.1</ele>
                <time>2020-01-25T16:00:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206170" lon="-74.0128130">
                <ele>1.3</ele>
                <time>2020-01-25T16:00:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7206770" lon="-74.0127850">
                <ele>0.4</ele>
                <time>2020-01-25T16:00:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7207270" lon="-74.0127470">
                <ele>0.3</ele>
                <time>2020-01-25T16:00:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7207550" lon="-74.0127210">
                <ele>0.3</ele>
                <time>2020-01-25T16:00:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7207970" lon="-74.0126940">
                <ele>2.4</ele>
                <time>2020-01-25T16:00:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7208820" lon="-74.0126430">
                <ele>2.4</ele>
                <time>2020-01-25T16:00:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7209660" lon="-74.0126100">
                <ele>2.4</ele>
                <time>2020-01-25T16:00:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7210190" lon="-74.0126010">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7210670" lon="-74.0125810">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7211130" lon="-74.0125630">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7211830" lon="-74.0125660">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7212350" lon="-74.0125630">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7212840" lon="-74.0125640">
                <ele>2.5</ele>
                <time>2020-01-25T16:00:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7213160" lon="-74.0125620">
                <ele>2.6</ele>
                <time>2020-01-25T16:01:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7213900" lon="-74.0125360">
                <ele>2.6</ele>
                <time>2020-01-25T16:01:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7214200" lon="-74.0125110">
                <ele>2.6</ele>
                <time>2020-01-25T16:01:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>157</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7214210" lon="-74.0125100">
                <ele>2.6</ele>
                <time>2020-01-25T16:01:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>145</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7215040" lon="-74.0124760">
                <ele>2.5</ele>
                <time>2020-01-25T16:01:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>145</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7215520" lon="-74.0124630">
                <ele>2.4</ele>
                <time>2020-01-25T16:01:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7215980" lon="-74.0124520">
                <ele>2.4</ele>
                <time>2020-01-25T16:01:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7216770" lon="-74.0124430">
                <ele>2.3</ele>
                <time>2020-01-25T16:01:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7217370" lon="-74.0124220">
                <ele>2.3</ele>
                <time>2020-01-25T16:01:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7218250" lon="-74.0124030">
                <ele>2.2</ele>
                <time>2020-01-25T16:01:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7219420" lon="-74.0124020">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7220250" lon="-74.0123920">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7220780" lon="-74.0123890">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7221290" lon="-74.0123780">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7221900" lon="-74.0123590">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7222360" lon="-74.0123450">
                <ele>2.1</ele>
                <time>2020-01-25T16:01:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7223270" lon="-74.0123220">
                <ele>2</ele>
                <time>2020-01-25T16:01:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7224510" lon="-74.0122790">
                <ele>0</ele>
                <time>2020-01-25T16:01:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7225550" lon="-74.0122670">
                <ele>0.3</ele>
                <time>2020-01-25T16:01:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7226200" lon="-74.0122400">
                <ele>1.9</ele>
                <time>2020-01-25T16:01:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7226970" lon="-74.0122100">
                <ele>1.9</ele>
                <time>2020-01-25T16:01:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7227950" lon="-74.0122100">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7227880" lon="-74.0122010">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7229170" lon="-74.0122270">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7229840" lon="-74.0122320">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7230660" lon="-74.0122290">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7231280" lon="-74.0122150">
                <ele>2</ele>
                <time>2020-01-25T16:02:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7231730" lon="-74.0122000">
                <ele>2</ele>
                <time>2020-01-25T16:02:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7232460" lon="-74.0121940">
                <ele>1.6</ele>
                <time>2020-01-25T16:02:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7233050" lon="-74.0121920">
                <ele>0.6</ele>
                <time>2020-01-25T16:02:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7234110" lon="-74.0121830">
                <ele>0.3</ele>
                <time>2020-01-25T16:02:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7235350" lon="-74.0121640">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7235880" lon="-74.0121380">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7236290" lon="-74.0121150">
                <ele>1.9</ele>
                <time>2020-01-25T16:02:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7237030" lon="-74.0120880">
                <ele>1.8</ele>
                <time>2020-01-25T16:02:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7237740" lon="-74.0120670">
                <ele>1.7</ele>
                <time>2020-01-25T16:02:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7238440" lon="-74.0120510">
                <ele>1.7</ele>
                <time>2020-01-25T16:02:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7238800" lon="-74.0120380">
                <ele>1.7</ele>
                <time>2020-01-25T16:02:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7239800" lon="-74.0119720">
                <ele>1.6</ele>
                <time>2020-01-25T16:02:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7240450" lon="-74.0119440">
                <ele>1.6</ele>
                <time>2020-01-25T16:02:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7240760" lon="-74.0119290">
                <ele>1.7</ele>
                <time>2020-01-25T16:02:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7241310" lon="-74.0119110">
                <ele>1.7</ele>
                <time>2020-01-25T16:02:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7241970" lon="-74.0119080">
                <ele>1.7</ele>
                <time>2020-01-25T16:03:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7242460" lon="-74.0119060">
                <ele>1.7</ele>
                <time>2020-01-25T16:03:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7242880" lon="-74.0119030">
                <ele>1.8</ele>
                <time>2020-01-25T16:03:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7243550" lon="-74.0119230">
                <ele>1.8</ele>
                <time>2020-01-25T16:03:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7244030" lon="-74.0119370">
                <ele>1.9</ele>
                <time>2020-01-25T16:03:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7244330" lon="-74.0119470">
                <ele>1.9</ele>
                <time>2020-01-25T16:03:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7244860" lon="-74.0119560">
                <ele>1.7</ele>
                <time>2020-01-25T16:03:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7245330" lon="-74.0119720">
                <ele>1.4</ele>
                <time>2020-01-25T16:03:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7245730" lon="-74.0119810">
                <ele>1.2</ele>
                <time>2020-01-25T16:03:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7246190" lon="-74.0119850">
                <ele>0.9</ele>
                <time>2020-01-25T16:03:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7246930" lon="-74.0119700">
                <ele>0.5</ele>
                <time>2020-01-25T16:03:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7247890" lon="-74.0119580">
                <ele>0.1</ele>
                <time>2020-01-25T16:03:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7248450" lon="-74.0119500">
                <ele>-0.2</ele>
                <time>2020-01-25T16:03:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7249280" lon="-74.0119280">
                <ele>-0.6</ele>
                <time>2020-01-25T16:03:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7250130" lon="-74.0118970">
                <ele>-0.9</ele>
                <time>2020-01-25T16:03:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7250740" lon="-74.0118890">
                <ele>-1.1</ele>
                <time>2020-01-25T16:03:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7251610" lon="-74.0118790">
                <ele>-1.3</ele>
                <time>2020-01-25T16:03:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7252100" lon="-74.0118690">
                <ele>-1.3</ele>
                <time>2020-01-25T16:03:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7252640" lon="-74.0118480">
                <ele>-1.3</ele>
                <time>2020-01-25T16:03:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7253280" lon="-74.0118310">
                <ele>-1.3</ele>
                <time>2020-01-25T16:03:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7253780" lon="-74.0118150">
                <ele>-1.2</ele>
                <time>2020-01-25T16:03:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7254460" lon="-74.0118130">
                <ele>0.6</ele>
                <time>2020-01-25T16:03:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7254830" lon="-74.0118060">
                <ele>0.9</ele>
                <time>2020-01-25T16:03:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7255360" lon="-74.0117960">
                <ele>0.9</ele>
                <time>2020-01-25T16:03:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>176</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7255750" lon="-74.0117870">
                <ele>0.9</ele>
                <time>2020-01-25T16:04:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7256640" lon="-74.0117620">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7257680" lon="-74.0116960">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7258300" lon="-74.0116690">
                <ele>0.7</ele>
                <time>2020-01-25T16:04:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7259220" lon="-74.0116340">
                <ele>0.7</ele>
                <time>2020-01-25T16:04:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7259880" lon="-74.0116200">
                <ele>0.7</ele>
                <time>2020-01-25T16:04:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7260980" lon="-74.0116050">
                <ele>0.6</ele>
                <time>2020-01-25T16:04:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7262080" lon="-74.0115810">
                <ele>0.5</ele>
                <time>2020-01-25T16:04:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7262730" lon="-74.0115770">
                <ele>0.4</ele>
                <time>2020-01-25T16:04:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7263660" lon="-74.0115520">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7264170" lon="-74.0115350">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7264880" lon="-74.0115260">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7265570" lon="-74.0115090">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7266090" lon="-74.0114770">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7266860" lon="-74.0114440">
                <ele>0.3</ele>
                <time>2020-01-25T16:04:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7267410" lon="-74.0114520">
                <ele>0.4</ele>
                <time>2020-01-25T16:04:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7268340" lon="-74.0114460">
                <ele>0.5</ele>
                <time>2020-01-25T16:04:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7268890" lon="-74.0114420">
                <ele>0.6</ele>
                <time>2020-01-25T16:04:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7269790" lon="-74.0114030">
                <ele>0.7</ele>
                <time>2020-01-25T16:04:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7270520" lon="-74.0113680">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7270990" lon="-74.0113580">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7271770" lon="-74.0113440">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7272300" lon="-74.0113280">
                <ele>0.8</ele>
                <time>2020-01-25T16:04:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7272940" lon="-74.0113050">
                <ele>0.8</ele>
                <time>2020-01-25T16:05:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7273480" lon="-74.0112960">
                <ele>0.7</ele>
                <time>2020-01-25T16:05:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7274340" lon="-74.0112900">
                <ele>0.6</ele>
                <time>2020-01-25T16:05:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7275030" lon="-74.0112750">
                <ele>0.5</ele>
                <time>2020-01-25T16:05:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7275520" lon="-74.0112710">
                <ele>0.5</ele>
                <time>2020-01-25T16:05:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7276380" lon="-74.0112740">
                <ele>0.4</ele>
                <time>2020-01-25T16:05:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7276800" lon="-74.0112730">
                <ele>0.3</ele>
                <time>2020-01-25T16:05:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7277480" lon="-74.0112830">
                <ele>2.1</ele>
                <time>2020-01-25T16:05:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7278140" lon="-74.0112740">
                <ele>2.1</ele>
                <time>2020-01-25T16:05:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7279300" lon="-74.0112340">
                <ele>2.2</ele>
                <time>2020-01-25T16:05:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7280260" lon="-74.0111940">
                <ele>2.3</ele>
                <time>2020-01-25T16:05:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7280800" lon="-74.0111580">
                <ele>2.3</ele>
                <time>2020-01-25T16:05:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7281450" lon="-74.0111140">
                <ele>2.2</ele>
                <time>2020-01-25T16:05:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7282010" lon="-74.0110900">
                <ele>2.2</ele>
                <time>2020-01-25T16:05:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7282630" lon="-74.0110790">
                <ele>2.2</ele>
                <time>2020-01-25T16:05:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7283480" lon="-74.0110370">
                <ele>2.1</ele>
                <time>2020-01-25T16:05:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7284540" lon="-74.0109800">
                <ele>2.1</ele>
                <time>2020-01-25T16:05:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7285530" lon="-74.0109710">
                <ele>2.1</ele>
                <time>2020-01-25T16:05:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7286690" lon="-74.0109570">
                <ele>2.2</ele>
                <time>2020-01-25T16:05:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7287530" lon="-74.0109350">
                <ele>2.3</ele>
                <time>2020-01-25T16:05:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7288300" lon="-74.0109220">
                <ele>2.3</ele>
                <time>2020-01-25T16:05:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7288980" lon="-74.0108920">
                <ele>2.3</ele>
                <time>2020-01-25T16:05:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7289800" lon="-74.0108750">
                <ele>2.2</ele>
                <time>2020-01-25T16:06:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7290410" lon="-74.0108400">
                <ele>2</ele>
                <time>2020-01-25T16:06:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7291120" lon="-74.0107740">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7291740" lon="-74.0107170">
                <ele>2</ele>
                <time>2020-01-25T16:06:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7292050" lon="-74.0106910">
                <ele>2.1</ele>
                <time>2020-01-25T16:06:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7292550" lon="-74.0106640">
                <ele>2.2</ele>
                <time>2020-01-25T16:06:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7293230" lon="-74.0105920">
                <ele>2</ele>
                <time>2020-01-25T16:06:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7294320" lon="-74.0105330">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7294940" lon="-74.0104830">
                <ele>1.8</ele>
                <time>2020-01-25T16:06:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7295600" lon="-74.0104420">
                <ele>1.7</ele>
                <time>2020-01-25T16:06:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7296060" lon="-74.0103950">
                <ele>1.8</ele>
                <time>2020-01-25T16:06:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7296440" lon="-74.0103620">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7296990" lon="-74.0102940">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7297490" lon="-74.0102420">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7298020" lon="-74.0101980">
                <ele>1.9</ele>
                <time>2020-01-25T16:06:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7298360" lon="-74.0101750">
                <ele>2</ele>
                <time>2020-01-25T16:06:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7298620" lon="-74.0101440">
                <ele>2.1</ele>
                <time>2020-01-25T16:06:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7299550" lon="-74.0103140">
                <ele>2</ele>
                <time>2020-01-25T16:06:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7300290" lon="-74.0104860">
                <ele>2.1</ele>
                <time>2020-01-25T16:06:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7300590" lon="-74.0105290">
                <ele>2.3</ele>
                <time>2020-01-25T16:06:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7301140" lon="-74.0106020">
                <ele>2.3</ele>
                <time>2020-01-25T16:06:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7301440" lon="-74.0106530">
                <ele>2.3</ele>
                <time>2020-01-25T16:06:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7302030" lon="-74.0107070">
                <ele>2.2</ele>
                <time>2020-01-25T16:06:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>177</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7302520" lon="-74.0107380">
                <ele>2.2</ele>
                <time>2020-01-25T16:06:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7303150" lon="-74.0107910">
                <ele>2.3</ele>
                <time>2020-01-25T16:07:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>163</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7303800" lon="-74.0108100">
                <ele>2.3</ele>
                <time>2020-01-25T16:07:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7304170" lon="-74.0108060">
                <ele>2.3</ele>
                <time>2020-01-25T16:07:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7304870" lon="-74.0107950">
                <ele>2.2</ele>
                <time>2020-01-25T16:07:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7305420" lon="-74.0108020">
                <ele>2.2</ele>
                <time>2020-01-25T16:07:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7306200" lon="-74.0108160">
                <ele>2.1</ele>
                <time>2020-01-25T16:07:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7306730" lon="-74.0108380">
                <ele>2.1</ele>
                <time>2020-01-25T16:07:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7307490" lon="-74.0108930">
                <ele>2.2</ele>
                <time>2020-01-25T16:07:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7308170" lon="-74.0109270">
                <ele>2.5</ele>
                <time>2020-01-25T16:07:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7308600" lon="-74.0109390">
                <ele>2.4</ele>
                <time>2020-01-25T16:07:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7309360" lon="-74.0109320">
                <ele>2.4</ele>
                <time>2020-01-25T16:07:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7309860" lon="-74.0109280">
                <ele>2.3</ele>
                <time>2020-01-25T16:07:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7310570" lon="-74.0109380">
                <ele>2.2</ele>
                <time>2020-01-25T16:07:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7311020" lon="-74.0109280">
                <ele>2.2</ele>
                <time>2020-01-25T16:07:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7311770" lon="-74.0109160">
                <ele>2.1</ele>
                <time>2020-01-25T16:07:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7312520" lon="-74.0109220">
                <ele>1.9</ele>
                <time>2020-01-25T16:07:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7313080" lon="-74.0109340">
                <ele>1.5</ele>
                <time>2020-01-25T16:07:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7314220" lon="-74.0109340">
                <ele>0.9</ele>
                <time>2020-01-25T16:07:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7315040" lon="-74.0109210">
                <ele>1</ele>
                <time>2020-01-25T16:07:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7316020" lon="-74.0109250">
                <ele>1.1</ele>
                <time>2020-01-25T16:07:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7316700" lon="-74.0109190">
                <ele>1.2</ele>
                <time>2020-01-25T16:07:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7317570" lon="-74.0109110">
                <ele>1.4</ele>
                <time>2020-01-25T16:08:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7318330" lon="-74.0109270">
                <ele>1.5</ele>
                <time>2020-01-25T16:08:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7318870" lon="-74.0109330">
                <ele>1.6</ele>
                <time>2020-01-25T16:08:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>166</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7319640" lon="-74.0109360">
                <ele>1.7</ele>
                <time>2020-01-25T16:08:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7320120" lon="-74.0109020">
                <ele>1.7</ele>
                <time>2020-01-25T16:08:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>164</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7320710" lon="-74.0108710">
                <ele>1.7</ele>
                <time>2020-01-25T16:08:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7320970" lon="-74.0108730">
                <ele>1.8</ele>
                <time>2020-01-25T16:08:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7321970" lon="-74.0108810">
                <ele>1.8</ele>
                <time>2020-01-25T16:08:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7322470" lon="-74.0108810">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7323070" lon="-74.0108740">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7324120" lon="-74.0108680">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7324490" lon="-74.0108810">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7324970" lon="-74.0108920">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7325360" lon="-74.0108840">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7326340" lon="-74.0108700">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7327390" lon="-74.0108670">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7327900" lon="-74.0108800">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7328390" lon="-74.0108920">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7329200" lon="-74.0109000">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>150</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7330040" lon="-74.0109050">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7330570" lon="-74.0109110">
                <ele>1.9</ele>
                <time>2020-01-25T16:08:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7331220" lon="-74.0108280">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>146</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7331950" lon="-74.0107930">
                <ele>1.8</ele>
                <time>2020-01-25T16:09:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>155</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7332250" lon="-74.0107390">
                <ele>1.7</ele>
                <time>2020-01-25T16:09:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>155</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7332860" lon="-74.0107140">
                <ele>3.1</ele>
                <time>2020-01-25T16:09:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>155</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7333240" lon="-74.0107080">
                <ele>2.8</ele>
                <time>2020-01-25T16:09:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7333840" lon="-74.0107090">
                <ele>2.4</ele>
                <time>2020-01-25T16:09:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7334380" lon="-74.0106980">
                <ele>2.1</ele>
                <time>2020-01-25T16:09:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7335140" lon="-74.0106870">
                <ele>1.6</ele>
                <time>2020-01-25T16:09:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7335610" lon="-74.0106860">
                <ele>1.3</ele>
                <time>2020-01-25T16:09:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7336530" lon="-74.0106800">
                <ele>1.1</ele>
                <time>2020-01-25T16:09:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7337700" lon="-74.0105620">
                <ele>1.7</ele>
                <time>2020-01-25T16:09:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7338280" lon="-74.0105630">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7339020" lon="-74.0105700">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7339450" lon="-74.0105930">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7340360" lon="-74.0106160">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7341350" lon="-74.0106160">
                <ele>1.9</ele>
                <time>2020-01-25T16:09:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>172</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7341990" lon="-74.0106220">
                <ele>2</ele>
                <time>2020-01-25T16:09:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7342900" lon="-74.0106600">
                <ele>2</ele>
                <time>2020-01-25T16:09:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7343420" lon="-74.0106810">
                <ele>2</ele>
                <time>2020-01-25T16:09:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7344330" lon="-74.0106880">
                <ele>2.3</ele>
                <time>2020-01-25T16:09:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7344790" lon="-74.0106820">
                <ele>2.3</ele>
                <time>2020-01-25T16:09:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7345520" lon="-74.0106910">
                <ele>2.2</ele>
                <time>2020-01-25T16:09:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7346430" lon="-74.0106530">
                <ele>2.1</ele>
                <time>2020-01-25T16:09:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7346900" lon="-74.0106550">
                <ele>2.1</ele>
                <time>2020-01-25T16:09:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7347600" lon="-74.0106600">
                <ele>2.1</ele>
                <time>2020-01-25T16:10:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7347960" lon="-74.0106650">
                <ele>2.1</ele>
                <time>2020-01-25T16:10:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7348610" lon="-74.0106980">
                <ele>2</ele>
                <time>2020-01-25T16:10:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7349410" lon="-74.0107110">
                <ele>2</ele>
                <time>2020-01-25T16:10:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7349950" lon="-74.0107040">
                <ele>2</ele>
                <time>2020-01-25T16:10:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7351050" lon="-74.0106190">
                <ele>1.9</ele>
                <time>2020-01-25T16:10:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7351550" lon="-74.0106300">
                <ele>1.9</ele>
                <time>2020-01-25T16:10:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7352400" lon="-74.0106020">
                <ele>2.3</ele>
                <time>2020-01-25T16:10:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7353020" lon="-74.0106290">
                <ele>2.8</ele>
                <time>2020-01-25T16:10:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7353770" lon="-74.0106440">
                <ele>3.4</ele>
                <time>2020-01-25T16:10:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7354110" lon="-74.0106670">
                <ele>3.7</ele>
                <time>2020-01-25T16:10:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7354610" lon="-74.0106700">
                <ele>4.2</ele>
                <time>2020-01-25T16:10:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7355070" lon="-74.0106610">
                <ele>4.1</ele>
                <time>2020-01-25T16:10:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7355670" lon="-74.0106440">
                <ele>4</ele>
                <time>2020-01-25T16:10:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7356010" lon="-74.0106450">
                <ele>3.9</ele>
                <time>2020-01-25T16:10:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7356780" lon="-74.0106400">
                <ele>3.7</ele>
                <time>2020-01-25T16:10:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7358190" lon="-74.0106130">
                <ele>3.2</ele>
                <time>2020-01-25T16:10:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7358690" lon="-74.0106020">
                <ele>3</ele>
                <time>2020-01-25T16:10:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7359400" lon="-74.0106080">
                <ele>2.7</ele>
                <time>2020-01-25T16:10:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7359920" lon="-74.0106170">
                <ele>2.4</ele>
                <time>2020-01-25T16:10:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7360510" lon="-74.0106070">
                <ele>2.2</ele>
                <time>2020-01-25T16:10:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7361310" lon="-74.0105910">
                <ele>2.1</ele>
                <time>2020-01-25T16:10:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7362050" lon="-74.0105630">
                <ele>2</ele>
                <time>2020-01-25T16:11:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7362610" lon="-74.0105520">
                <ele>2</ele>
                <time>2020-01-25T16:11:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7363380" lon="-74.0105460">
                <ele>1.9</ele>
                <time>2020-01-25T16:11:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7363850" lon="-74.0105570">
                <ele>1.8</ele>
                <time>2020-01-25T16:11:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7363900" lon="-74.0105690">
                <ele>1.8</ele>
                <time>2020-01-25T16:11:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7364610" lon="-74.0105700">
                <ele>1.9</ele>
                <time>2020-01-25T16:11:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>179</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7365470" lon="-74.0105740">
                <ele>1.9</ele>
                <time>2020-01-25T16:11:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7366520" lon="-74.0105540">
                <ele>1.9</ele>
                <time>2020-01-25T16:11:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7367070" lon="-74.0105400">
                <ele>1.9</ele>
                <time>2020-01-25T16:11:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7368030" lon="-74.0105660">
                <ele>2</ele>
                <time>2020-01-25T16:11:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7369130" lon="-74.0105830">
                <ele>2.1</ele>
                <time>2020-01-25T16:11:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7370060" lon="-74.0105820">
                <ele>2.2</ele>
                <time>2020-01-25T16:11:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7371310" lon="-74.0105410">
                <ele>2.4</ele>
                <time>2020-01-25T16:11:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7372140" lon="-74.0105210">
                <ele>2.5</ele>
                <time>2020-01-25T16:11:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7373270" lon="-74.0105070">
                <ele>2.8</ele>
                <time>2020-01-25T16:11:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7374010" lon="-74.0105040">
                <ele>2.9</ele>
                <time>2020-01-25T16:11:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7375120" lon="-74.0104860">
                <ele>3.3</ele>
                <time>2020-01-25T16:11:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7376310" lon="-74.0104840">
                <ele>3.7</ele>
                <time>2020-01-25T16:11:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7377060" lon="-74.0104790">
                <ele>3.5</ele>
                <time>2020-01-25T16:11:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7377820" lon="-74.0104910">
                <ele>3.3</ele>
                <time>2020-01-25T16:11:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7378250" lon="-74.0104940">
                <ele>3.1</ele>
                <time>2020-01-25T16:11:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7378750" lon="-74.0104970">
                <ele>3</ele>
                <time>2020-01-25T16:11:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7379210" lon="-74.0105000">
                <ele>2.8</ele>
                <time>2020-01-25T16:12:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7379580" lon="-74.0104950">
                <ele>2.7</ele>
                <time>2020-01-25T16:12:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380240" lon="-74.0104960">
                <ele>2.5</ele>
                <time>2020-01-25T16:12:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380720" lon="-74.0105040">
                <ele>2.3</ele>
                <time>2020-01-25T16:12:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381670" lon="-74.0105060">
                <ele>2</ele>
                <time>2020-01-25T16:12:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7382340" lon="-74.0105040">
                <ele>1.7</ele>
                <time>2020-01-25T16:12:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383450" lon="-74.0105010">
                <ele>0</ele>
                <time>2020-01-25T16:12:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384350" lon="-74.0104930">
                <ele>-1.2</ele>
                <time>2020-01-25T16:12:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384930" lon="-74.0104830">
                <ele>-2</ele>
                <time>2020-01-25T16:12:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>175</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7385610" lon="-74.0104690">
                <ele>-1.6</ele>
                <time>2020-01-25T16:12:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7386340" lon="-74.0104130">
                <ele>-1.1</ele>
                <time>2020-01-25T16:12:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7387280" lon="-74.0103960">
                <ele>-0.5</ele>
                <time>2020-01-25T16:12:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388010" lon="-74.0103910">
                <ele>-0.1</ele>
                <time>2020-01-25T16:12:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389060" lon="-74.0103870">
                <ele>0.4</ele>
                <time>2020-01-25T16:12:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>178</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7390110" lon="-74.0103700">
                <ele>0.9</ele>
                <time>2020-01-25T16:12:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7390550" lon="-74.0103220">
                <ele>1.1</ele>
                <time>2020-01-25T16:12:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>180</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7391190" lon="-74.0103220">
                <ele>1.4</ele>
                <time>2020-01-25T16:12:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7391590" lon="-74.0103250">
                <ele>1.5</ele>
                <time>2020-01-25T16:12:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7392190" lon="-74.0102770">
                <ele>1.8</ele>
                <time>2020-01-25T16:12:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7392530" lon="-74.0102800">
                <ele>1.9</ele>
                <time>2020-01-25T16:12:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7393000" lon="-74.0102740">
                <ele>2.1</ele>
                <time>2020-01-25T16:12:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7393370" lon="-74.0102720">
                <ele>2.1</ele>
                <time>2020-01-25T16:12:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394120" lon="-74.0102080">
                <ele>2.1</ele>
                <time>2020-01-25T16:12:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7395090" lon="-74.0101530">
                <ele>2.3</ele>
                <time>2020-01-25T16:13:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7395620" lon="-74.0101290">
                <ele>2.3</ele>
                <time>2020-01-25T16:13:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7396260" lon="-74.0101050">
                <ele>2.4</ele>
                <time>2020-01-25T16:13:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7396700" lon="-74.0101010">
                <ele>2.4</ele>
                <time>2020-01-25T16:13:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7397250" lon="-74.0100480">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7397760" lon="-74.0100430">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7398400" lon="-74.0100080">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7399220" lon="-74.0099870">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7399570" lon="-74.0099790">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7400010" lon="-74.0099560">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7400630" lon="-74.0099670">
                <ele>2.5</ele>
                <time>2020-01-25T16:13:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7401000" lon="-74.0099970">
                <ele>2.4</ele>
                <time>2020-01-25T16:13:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7401670" lon="-74.0100230">
                <ele>2.2</ele>
                <time>2020-01-25T16:13:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7402160" lon="-74.0100090">
                <ele>2</ele>
                <time>2020-01-25T16:13:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7403050" lon="-74.0099960">
                <ele>1.5</ele>
                <time>2020-01-25T16:13:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7403660" lon="-74.0099790">
                <ele>1.2</ele>
                <time>2020-01-25T16:13:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404730" lon="-74.0099350">
                <ele>0.7</ele>
                <time>2020-01-25T16:13:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7405710" lon="-74.0098780">
                <ele>0.2</ele>
                <time>2020-01-25T16:13:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7407140" lon="-74.0098070">
                <ele>-0.1</ele>
                <time>2020-01-25T16:13:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7408470" lon="-74.0097360">
                <ele>-0.4</ele>
                <time>2020-01-25T16:13:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7409120" lon="-74.0097150">
                <ele>-0.4</ele>
                <time>2020-01-25T16:13:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7409820" lon="-74.0096330">
                <ele>-0.5</ele>
                <time>2020-01-25T16:13:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7410120" lon="-74.0095750">
                <ele>-0.5</ele>
                <time>2020-01-25T16:13:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7410320" lon="-74.0094950">
                <ele>-0.5</ele>
                <time>2020-01-25T16:13:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7410650" lon="-74.0094360">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7411010" lon="-74.0093790">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7411560" lon="-74.0093450">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7412030" lon="-74.0093360">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7412770" lon="-74.0092960">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413470" lon="-74.0092790">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414070" lon="-74.0092820">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414860" lon="-74.0092810">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415300" lon="-74.0092870">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415910" lon="-74.0092940">
                <ele>-0.5</ele>
                <time>2020-01-25T16:14:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7416600" lon="-74.0093030">
                <ele>-0.5</ele>
                <time>2020-01-25T16:14:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7417090" lon="-74.0093000">
                <ele>-0.5</ele>
                <time>2020-01-25T16:14:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7417700" lon="-74.0092890">
                <ele>-0.5</ele>
                <time>2020-01-25T16:14:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>186</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7418610" lon="-74.0092460">
                <ele>-0.6</ele>
                <time>2020-01-25T16:14:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7419480" lon="-74.0092220">
                <ele>-0.7</ele>
                <time>2020-01-25T16:14:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>183</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7419980" lon="-74.0092000">
                <ele>-0.8</ele>
                <time>2020-01-25T16:14:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420260" lon="-74.0091300">
                <ele>-0.9</ele>
                <time>2020-01-25T16:14:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7421220" lon="-74.0091180">
                <ele>-1.1</ele>
                <time>2020-01-25T16:14:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420720" lon="-74.0090590">
                <ele>-1.3</ele>
                <time>2020-01-25T16:14:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>184</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7422810" lon="-74.0090720">
                <ele>2.6</ele>
                <time>2020-01-25T16:14:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7423260" lon="-74.0090560">
                <ele>2.6</ele>
                <time>2020-01-25T16:14:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7424890" lon="-74.0090380">
                <ele>2.6</ele>
                <time>2020-01-25T16:15:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>181</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7426560" lon="-74.0089460">
                <ele>2.6</ele>
                <time>2020-01-25T16:15:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7427440" lon="-74.0089040">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7427870" lon="-74.0088970">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7428820" lon="-74.0088640">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429090" lon="-74.0088690">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429530" lon="-74.0088830">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430160" lon="-74.0088670">
                <ele>2.4</ele>
                <time>2020-01-25T16:15:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431090" lon="-74.0088510">
                <ele>2.5</ele>
                <time>2020-01-25T16:15:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431090" lon="-74.0088350">
                <ele>2.5</ele>
                <time>2020-01-25T16:15:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>182</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431040" lon="-74.0087890">
                <ele>2.5</ele>
                <time>2020-01-25T16:15:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430960" lon="-74.0087860">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431000" lon="-74.0087820">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430890" lon="-74.0087470">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430610" lon="-74.0087160">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430550" lon="-74.0086360">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430360" lon="-74.0085460">
                <ele>2.5</ele>
                <time>2020-01-25T16:16:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430080" lon="-74.0084890">
                <ele>2.4</ele>
                <time>2020-01-25T16:16:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>139</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429840" lon="-74.0084260">
                <ele>2.4</ele>
                <time>2020-01-25T16:16:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429700" lon="-74.0083870">
                <ele>2.4</ele>
                <time>2020-01-25T16:16:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429500" lon="-74.0083310">
                <ele>2.6</ele>
                <time>2020-01-25T16:16:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429560" lon="-74.0082340">
                <ele>2.6</ele>
                <time>2020-01-25T16:16:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429580" lon="-74.0081680">
                <ele>2.6</ele>
                <time>2020-01-25T16:16:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429660" lon="-74.0080160">
                <ele>2.9</ele>
                <time>2020-01-25T16:16:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429670" lon="-74.0080250">
                <ele>2.9</ele>
                <time>2020-01-25T16:16:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430310" lon="-74.0079550">
                <ele>2.9</ele>
                <time>2020-01-25T16:17:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430490" lon="-74.0079310">
                <ele>3</ele>
                <time>2020-01-25T16:17:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430810" lon="-74.0079020">
                <ele>3</ele>
                <time>2020-01-25T16:17:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431090" lon="-74.0078300">
                <ele>3</ele>
                <time>2020-01-25T16:17:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431180" lon="-74.0078010">
                <ele>3</ele>
                <time>2020-01-25T16:17:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431300" lon="-74.0077090">
                <ele>3.1</ele>
                <time>2020-01-25T16:17:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431160" lon="-74.0076370">
                <ele>3.2</ele>
                <time>2020-01-25T16:17:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7431050" lon="-74.0076100">
                <ele>3.2</ele>
                <time>2020-01-25T16:17:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7430620" lon="-74.0076110">
                <ele>3.3</ele>
                <time>2020-01-25T16:17:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429990" lon="-74.0073340">
                <ele>3.3</ele>
                <time>2020-01-25T16:17:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429840" lon="-74.0072910">
                <ele>3.3</ele>
                <time>2020-01-25T16:17:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7429510" lon="-74.0072810">
                <ele>3.3</ele>
                <time>2020-01-25T16:17:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7428310" lon="-74.0071410">
                <ele>3.3</ele>
                <time>2020-01-25T16:17:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>162</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7427570" lon="-74.0069890">
                <ele>3.2</ele>
                <time>2020-01-25T16:17:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7426940" lon="-74.0068820">
                <ele>3.1</ele>
                <time>2020-01-25T16:17:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7426260" lon="-74.0067660">
                <ele>3.1</ele>
                <time>2020-01-25T16:17:53Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7425840" lon="-74.0066990">
                <ele>3.2</ele>
                <time>2020-01-25T16:17:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7425230" lon="-74.0065340">
                <ele>3.4</ele>
                <time>2020-01-25T16:17:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7423800" lon="-74.0063790">
                <ele>3.5</ele>
                <time>2020-01-25T16:18:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7423210" lon="-74.0062850">
                <ele>3.6</ele>
                <time>2020-01-25T16:18:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7422560" lon="-74.0062050">
                <ele>3.6</ele>
                <time>2020-01-25T16:18:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7422240" lon="-74.0061710">
                <ele>3.7</ele>
                <time>2020-01-25T16:18:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7421850" lon="-74.0061000">
                <ele>3.7</ele>
                <time>2020-01-25T16:18:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>169</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7421410" lon="-74.0060170">
                <ele>3.8</ele>
                <time>2020-01-25T16:18:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7421180" lon="-74.0059770">
                <ele>3.9</ele>
                <time>2020-01-25T16:18:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>173</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7421030" lon="-74.0059370">
                <ele>3.9</ele>
                <time>2020-01-25T16:18:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420840" lon="-74.0058940">
                <ele>4</ele>
                <time>2020-01-25T16:18:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420740" lon="-74.0058690">
                <ele>4</ele>
                <time>2020-01-25T16:18:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>174</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420730" lon="-74.0058510">
                <ele>4</ele>
                <time>2020-01-25T16:18:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420810" lon="-74.0058210">
                <ele>4</ele>
                <time>2020-01-25T16:18:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420610" lon="-74.0057490">
                <ele>4.1</ele>
                <time>2020-01-25T16:18:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420710" lon="-74.0057030">
                <ele>4.2</ele>
                <time>2020-01-25T16:18:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7420610" lon="-74.0056400">
                <ele>4.2</ele>
                <time>2020-01-25T16:18:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7419920" lon="-74.0054820">
                <ele>4.5</ele>
                <time>2020-01-25T16:18:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7419680" lon="-74.0052890">
                <ele>4.6</ele>
                <time>2020-01-25T16:19:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7418910" lon="-74.0051770">
                <ele>4.7</ele>
                <time>2020-01-25T16:19:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7417600" lon="-74.0050660">
                <ele>4.8</ele>
                <time>2020-01-25T16:19:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>127</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7417270" lon="-74.0050590">
                <ele>4.8</ele>
                <time>2020-01-25T16:19:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>127</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7416910" lon="-74.0050420">
                <ele>4.8</ele>
                <time>2020-01-25T16:19:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>127</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7416560" lon="-74.0050240">
                <ele>4.8</ele>
                <time>2020-01-25T16:19:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>123</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7416210" lon="-74.0050060">
                <ele>4.8</ele>
                <time>2020-01-25T16:20:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>123</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415850" lon="-74.0049890">
                <ele>4.8</ele>
                <time>2020-01-25T16:20:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>123</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415500" lon="-74.0049710">
                <ele>4.8</ele>
                <time>2020-01-25T16:20:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>123</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415720" lon="-74.0049340">
                <ele>4.8</ele>
                <time>2020-01-25T16:20:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415910" lon="-74.0048560">
                <ele>5</ele>
                <time>2020-01-25T16:20:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7415730" lon="-74.0048260">
                <ele>4.9</ele>
                <time>2020-01-25T16:20:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414850" lon="-74.0046850">
                <ele>4.6</ele>
                <time>2020-01-25T16:20:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414780" lon="-74.0046430">
                <ele>4.5</ele>
                <time>2020-01-25T16:20:24Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414790" lon="-74.0045680">
                <ele>4.4</ele>
                <time>2020-01-25T16:20:27Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414640" lon="-74.0045140">
                <ele>4.4</ele>
                <time>2020-01-25T16:20:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414260" lon="-74.0044050">
                <ele>4.2</ele>
                <time>2020-01-25T16:20:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7414060" lon="-74.0042910">
                <ele>4.2</ele>
                <time>2020-01-25T16:20:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413840" lon="-74.0041870">
                <ele>4.2</ele>
                <time>2020-01-25T16:20:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413710" lon="-74.0040760">
                <ele>4.3</ele>
                <time>2020-01-25T16:20:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413750" lon="-74.0040280">
                <ele>4.3</ele>
                <time>2020-01-25T16:20:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413800" lon="-74.0039760">
                <ele>4.4</ele>
                <time>2020-01-25T16:20:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413700" lon="-74.0038830">
                <ele>4.5</ele>
                <time>2020-01-25T16:20:48Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413640" lon="-74.0038600">
                <ele>4.5</ele>
                <time>2020-01-25T16:20:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413570" lon="-74.0037720">
                <ele>4.6</ele>
                <time>2020-01-25T16:20:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>152</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413710" lon="-74.0037150">
                <ele>4.6</ele>
                <time>2020-01-25T16:21:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7413240" lon="-74.0035280">
                <ele>4.7</ele>
                <time>2020-01-25T16:21:06Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7412460" lon="-74.0033460">
                <ele>4.7</ele>
                <time>2020-01-25T16:21:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7412150" lon="-74.0032370">
                <ele>4.7</ele>
                <time>2020-01-25T16:21:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7411950" lon="-74.0030690">
                <ele>4.8</ele>
                <time>2020-01-25T16:21:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7411980" lon="-74.0030280">
                <ele>4.9</ele>
                <time>2020-01-25T16:21:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7411050" lon="-74.0028780">
                <ele>5.1</ele>
                <time>2020-01-25T16:21:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7410750" lon="-74.0027590">
                <ele>5.3</ele>
                <time>2020-01-25T16:21:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7410230" lon="-74.0026210">
                <ele>5.6</ele>
                <time>2020-01-25T16:21:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7409800" lon="-74.0025040">
                <ele>5.7</ele>
                <time>2020-01-25T16:21:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7409440" lon="-74.0024300">
                <ele>5.8</ele>
                <time>2020-01-25T16:21:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7408650" lon="-74.0023490">
                <ele>5.9</ele>
                <time>2020-01-25T16:21:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7408350" lon="-74.0023090">
                <ele>6</ele>
                <time>2020-01-25T16:21:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7407890" lon="-74.0022350">
                <ele>6.2</ele>
                <time>2020-01-25T16:21:39Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7407750" lon="-74.0021920">
                <ele>6.2</ele>
                <time>2020-01-25T16:21:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7407490" lon="-74.0021490">
                <ele>6.3</ele>
                <time>2020-01-25T16:21:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7407200" lon="-74.0021140">
                <ele>6.4</ele>
                <time>2020-01-25T16:21:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7406760" lon="-74.0020300">
                <ele>6.7</ele>
                <time>2020-01-25T16:21:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7406330" lon="-74.0019550">
                <ele>6.8</ele>
                <time>2020-01-25T16:21:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7406060" lon="-74.0018880">
                <ele>6.9</ele>
                <time>2020-01-25T16:21:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7405580" lon="-74.0017980">
                <ele>6.9</ele>
                <time>2020-01-25T16:21:57Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7405280" lon="-74.0017410">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7405040" lon="-74.0017110">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404740" lon="-74.0016720">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404640" lon="-74.0016360">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404510" lon="-74.0015760">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404540" lon="-74.0015200">
                <ele>6.9</ele>
                <time>2020-01-25T16:22:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404500" lon="-74.0014930">
                <ele>7</ele>
                <time>2020-01-25T16:22:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404320" lon="-74.0014650">
                <ele>7</ele>
                <time>2020-01-25T16:22:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404280" lon="-74.0013470">
                <ele>7</ele>
                <time>2020-01-25T16:22:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404400" lon="-74.0012810">
                <ele>7</ele>
                <time>2020-01-25T16:22:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404310" lon="-74.0011900">
                <ele>7</ele>
                <time>2020-01-25T16:22:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>170</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7404010" lon="-74.0011110">
                <ele>7</ele>
                <time>2020-01-25T16:22:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7403490" lon="-74.0010590">
                <ele>7</ele>
                <time>2020-01-25T16:22:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7402670" lon="-74.0010140">
                <ele>7</ele>
                <time>2020-01-25T16:22:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7401380" lon="-74.0009100">
                <ele>7.1</ele>
                <time>2020-01-25T16:22:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7400600" lon="-74.0008440">
                <ele>7.2</ele>
                <time>2020-01-25T16:22:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7399920" lon="-74.0008280">
                <ele>7.2</ele>
                <time>2020-01-25T16:22:43Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7398200" lon="-74.0006920">
                <ele>7.4</ele>
                <time>2020-01-25T16:22:46Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7397280" lon="-74.0006580">
                <ele>7.5</ele>
                <time>2020-01-25T16:22:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>156</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7396770" lon="-74.0005720">
                <ele>7.5</ele>
                <time>2020-01-25T16:22:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7396010" lon="-74.0005520">
                <ele>7.6</ele>
                <time>2020-01-25T16:22:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7395640" lon="-74.0004290">
                <ele>7.6</ele>
                <time>2020-01-25T16:22:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7395070" lon="-74.0003630">
                <ele>7.7</ele>
                <time>2020-01-25T16:22:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394770" lon="-74.0003280">
                <ele>7.7</ele>
                <time>2020-01-25T16:23:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394750" lon="-74.0001870">
                <ele>7.8</ele>
                <time>2020-01-25T16:23:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394490" lon="-74.0001600">
                <ele>7.8</ele>
                <time>2020-01-25T16:23:07Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394080" lon="-74.0001110">
                <ele>7.8</ele>
                <time>2020-01-25T16:23:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7393840" lon="-74.0000790">
                <ele>7.9</ele>
                <time>2020-01-25T16:23:14Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>159</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7393840" lon="-74.0000270">
                <ele>7.9</ele>
                <time>2020-01-25T16:23:17Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7393820" lon="-73.9999850">
                <ele>7.9</ele>
                <time>2020-01-25T16:23:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394180" lon="-73.9999130">
                <ele>7.9</ele>
                <time>2020-01-25T16:23:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394710" lon="-73.9997990">
                <ele>8</ele>
                <time>2020-01-25T16:23:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394710" lon="-73.9996520">
                <ele>8</ele>
                <time>2020-01-25T16:23:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394800" lon="-73.9995980">
                <ele>8</ele>
                <time>2020-01-25T16:23:32Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7394580" lon="-73.9996200">
                <ele>8</ele>
                <time>2020-01-25T16:23:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7392030" lon="-73.9994800">
                <ele>8.1</ele>
                <time>2020-01-25T16:23:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7391670" lon="-73.9994400">
                <ele>8.1</ele>
                <time>2020-01-25T16:23:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7391540" lon="-73.9994210">
                <ele>8.1</ele>
                <time>2020-01-25T16:24:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7390760" lon="-73.9993520">
                <ele>8.1</ele>
                <time>2020-01-25T16:24:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7390490" lon="-73.9993010">
                <ele>8.1</ele>
                <time>2020-01-25T16:24:08Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7390320" lon="-73.9992670">
                <ele>8.1</ele>
                <time>2020-01-25T16:24:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389870" lon="-73.9991840">
                <ele>8.1</ele>
                <time>2020-01-25T16:24:13Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389440" lon="-73.9990830">
                <ele>8.2</ele>
                <time>2020-01-25T16:24:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389260" lon="-73.9990270">
                <ele>8.2</ele>
                <time>2020-01-25T16:24:18Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389250" lon="-73.9989710">
                <ele>8.3</ele>
                <time>2020-01-25T16:24:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7389260" lon="-73.9988570">
                <ele>8.5</ele>
                <time>2020-01-25T16:24:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388970" lon="-73.9987610">
                <ele>8.7</ele>
                <time>2020-01-25T16:24:26Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388870" lon="-73.9986500">
                <ele>8.9</ele>
                <time>2020-01-25T16:24:29Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388790" lon="-73.9985540">
                <ele>9</ele>
                <time>2020-01-25T16:24:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388780" lon="-73.9984260">
                <ele>9</ele>
                <time>2020-01-25T16:24:34Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388920" lon="-73.9983640">
                <ele>9.1</ele>
                <time>2020-01-25T16:24:36Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388950" lon="-73.9982960">
                <ele>9.1</ele>
                <time>2020-01-25T16:24:38Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388740" lon="-73.9982170">
                <ele>9.2</ele>
                <time>2020-01-25T16:24:41Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388580" lon="-73.9981620">
                <ele>9.2</ele>
                <time>2020-01-25T16:24:44Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388890" lon="-73.9979960">
                <ele>9.5</ele>
                <time>2020-01-25T16:24:49Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>158</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388660" lon="-73.9978960">
                <ele>9.7</ele>
                <time>2020-01-25T16:24:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388520" lon="-73.9978560">
                <ele>9.8</ele>
                <time>2020-01-25T16:24:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388390" lon="-73.9977720">
                <ele>9.9</ele>
                <time>2020-01-25T16:24:59Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7388090" lon="-73.9977160">
                <ele>9.9</ele>
                <time>2020-01-25T16:25:02Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7387860" lon="-73.9976700">
                <ele>10</ele>
                <time>2020-01-25T16:25:04Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7387460" lon="-73.9975880">
                <ele>10</ele>
                <time>2020-01-25T16:25:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7387120" lon="-73.9975340">
                <ele>10</ele>
                <time>2020-01-25T16:25:12Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7386810" lon="-73.9974830">
                <ele>10</ele>
                <time>2020-01-25T16:25:15Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>165</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7386460" lon="-73.9973920">
                <ele>10</ele>
                <time>2020-01-25T16:25:20Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7386280" lon="-73.9973650">
                <ele>10</ele>
                <time>2020-01-25T16:25:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7386000" lon="-73.9973150">
                <ele>10</ele>
                <time>2020-01-25T16:25:25Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7385660" lon="-73.9972920">
                <ele>10</ele>
                <time>2020-01-25T16:25:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7385180" lon="-73.9972490">
                <ele>10</ele>
                <time>2020-01-25T16:25:30Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384750" lon="-73.9972320">
                <ele>10</ele>
                <time>2020-01-25T16:25:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>144</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384310" lon="-73.9971690">
                <ele>10</ele>
                <time>2020-01-25T16:25:35Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>133</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384330" lon="-73.9971470">
                <ele>10</ele>
                <time>2020-01-25T16:25:37Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>133</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384530" lon="-73.9971070">
                <ele>10</ele>
                <time>2020-01-25T16:25:40Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>130</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384260" lon="-73.9970520">
                <ele>10</ele>
                <time>2020-01-25T16:25:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>129</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384220" lon="-73.9969860">
                <ele>9.9</ele>
                <time>2020-01-25T16:25:51Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>126</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384140" lon="-73.9968620">
                <ele>9.9</ele>
                <time>2020-01-25T16:25:56Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>124</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384180" lon="-73.9968310">
                <ele>9.8</ele>
                <time>2020-01-25T16:25:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>124</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384090" lon="-73.9968010">
                <ele>9.8</ele>
                <time>2020-01-25T16:26:01Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>124</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383730" lon="-73.9967440">
                <ele>9.7</ele>
                <time>2020-01-25T16:26:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>124</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383390" lon="-73.9967140">
                <ele>9.6</ele>
                <time>2020-01-25T16:26:09Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>124</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383300" lon="-73.9967160">
                <ele>9.6</ele>
                <time>2020-01-25T16:26:11Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>123</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383620" lon="-73.9966110">
                <ele>9.3</ele>
                <time>2020-01-25T16:26:19Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>116</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383780" lon="-73.9965680">
                <ele>9.3</ele>
                <time>2020-01-25T16:26:22Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>116</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7384080" lon="-73.9965170">
                <ele>9.1</ele>
                <time>2020-01-25T16:26:42Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>129</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383680" lon="-73.9964560">
                <ele>9</ele>
                <time>2020-01-25T16:26:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>129</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383480" lon="-73.9964110">
                <ele>9</ele>
                <time>2020-01-25T16:26:47Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>132</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7383030" lon="-73.9963440">
                <ele>9</ele>
                <time>2020-01-25T16:26:50Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>132</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7382770" lon="-73.9963080">
                <ele>9</ele>
                <time>2020-01-25T16:26:52Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>132</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7382300" lon="-73.9962560">
                <ele>9</ele>
                <time>2020-01-25T16:26:55Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381910" lon="-73.9962120">
                <ele>8.9</ele>
                <time>2020-01-25T16:26:58Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381620" lon="-73.9961800">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381320" lon="-73.9961660">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:03Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381240" lon="-73.9961500">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:05Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>148</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381220" lon="-73.9960900">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:10Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>161</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381020" lon="-73.9959870">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:16Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>163</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380860" lon="-73.9958890">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:21Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>163</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380720" lon="-73.9958690">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:23Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381090" lon="-73.9957800">
                <ele>8.9</ele>
                <time>2020-01-25T16:27:28Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380970" lon="-73.9957130">
                <ele>9</ele>
                <time>2020-01-25T16:27:31Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>167</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7381040" lon="-73.9957090">
                <ele>9</ele>
                <time>2020-01-25T16:27:33Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7380620" lon="-73.9956380">
                <ele>9</ele>
                <time>2020-01-25T16:27:45Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7379930" lon="-73.9955500">
                <ele>9.1</ele>
                <time>2020-01-25T16:27:54Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
            <trkpt lat="40.7379210" lon="-73.9954560">
                <ele>9.2</ele>
                <time>2020-01-25T16:28:00Z</time>
                <extensions>
                    <gpxtpx:TrackPointExtension>
                        <gpxtpx:hr>168</gpxtpx:hr>
                    </gpxtpx:TrackPointExtension>
                </extensions>
            </trkpt>
        </trkseg>
    </trk>
</gpx>`);
    this.$router.push('map');
  },
  methods: {
    ...mapActions({
      parseFile: PARSE_FILE,
    }),
    uploadFile(event) {
      if (!window.FileReader) return; // Browser is not compatible

      const reader = new FileReader();

      reader.onload = (evt) => {
        if (evt.target.readyState !== 2) return;
        if (evt.target.error) {
          // eslint-disable-next-line no-alert
          alert('Error while reading file');
          return;
        }

        this.parseFile(evt.target.result);
        this.$router.push('map');
      };

      reader.readAsText(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;
  }
</style>
