<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"              
                expand-text="yes"
                version="3.0">
     <!-- exclude-result-prefixes="#all"  -->
     
     <xsl:output method="text" indent="yes"/>
     <xsl:mode on-no-match="shallow-copy"/>
     
     <!-- <xsl:variable name="datacite-titles" select="//*[name() = 'titles']"/> -->
     <xsl:variable name="datacite-records" select="//*[name() = 'resource']"/>
     
     <xsl:template match="/*" mode="#all">
          <!-- <xsl:copy>
               <xsl:apply-templates select="@*, node()" mode="#current"/>
               </xsl:copy> -->
          
          <!-- <xsl:for-each select="$datacite-records/*[name() = 'record']">  -->
          <xsl:for-each select="$datacite-records">                
               <!-- definbe variables -->
               <xsl:variable name="identifier" select="*[name() = 'identifier']"/>
               <xsl:variable name="datacite-titles" select="*[name() = 'titles']"/>
               <xsl:variable name="main_title">
                    <xsl:for-each select="$datacite-titles/*[name() = 'title']">
                         <xsl:choose>
                              <xsl:when test="not(count(@titleType) &gt; 0)">
                                   <xsl:value-of select="."/>
                              </xsl:when>                        
                         </xsl:choose>
                    </xsl:for-each>
               </xsl:variable> 
               <xsl:variable name="datacite-subjects" select="*[name() = 'subjects']"/> 
               <xsl:variable name="subjects">
                    <xsl:for-each select="$datacite-subjects/*[name() = 'subject']">
                         <xsl:value-of select="concat(normalize-space(.), ', ')"/>
                    </xsl:for-each>
               </xsl:variable>

                <!-- <xsl:value-of select="*[name() = 'identifier']"/>    -->               
               {{                       
               "doi": "{$identifier}",
               "title": "{$main_title}",
               "subject":  "{$subjects}"
               }},       
          </xsl:for-each>
          <!-- <xsl:value-of select="$datacite-titles" separator="&#x20;"/> -->          
     </xsl:template>
     
     
     
</xsl:stylesheet>